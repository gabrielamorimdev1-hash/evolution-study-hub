import {getChatGPTUser} from '../../chatgpt-auth';
import {database} from '@/db/store';
import {topics,projects,tracks} from '@/lib/curriculum';
import {emptyState,today,type State} from '@/lib/model';
import {z} from 'zod';
export const dynamic='force-dynamic';
const status=z.enum(['new','studying','done']);
const note=z.string().max(20000);
const difficulty=z.enum(['Fácil','Média','Difícil']);
const topicSchema=z.object({status,notes:note,studied:z.boolean(),practiced:z.boolean(),difficulty,exercises:z.array(z.string().max(500)).max(150)}).strict();
const projectSchema=z.object({status,notes:note,github:z.string().max(500).refine(x=>!x||/^https:\/\/(www\.)?github\.com\/[\w.-]+(?:\/[\w.\/-]*)?$/.test(x),'Use um link https://github.com/...')}).strict();
const sessionSchema=z.object({id:z.string().uuid(),date:z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(x=>!Number.isNaN(Date.parse(x))&&new Date(x).toISOString().slice(0,10)===x&&x<=today(),'Data inválida ou futura'),track:z.string(),topic:z.string().max(200),minutes:z.number().int().min(1).max(1440),difficulty,notes:note,activity:z.enum(['Estudo','Shadowing','Leitura','Escrita','Conversação','Vocabulário','Listening','Exercícios','Projeto']),skill:z.enum(['','Listening','Speaking','Reading','Writing'])}).strict().superRefine((s,c)=>{if(!tracks.some(t=>t.id===s.track))c.addIssue({code:'custom',message:'Trilha inválida'});if(s.topic&&!topics.some(t=>t.id===s.topic&&t.track===s.track))c.addIssue({code:'custom',message:'Tópico não pertence à trilha'});if(s.track!=='english'&&s.skill)c.addIssue({code:'custom',message:'Habilidade reservada a inglês'});if(s.track==='english'&&!s.skill)c.addIssue({code:'custom',message:'Escolha a habilidade praticada'});});
const goalSchema=z.object({id:z.string().uuid(),title:z.string().trim().min(1).max(160),target:z.number().int().min(1).max(100000),kind:z.enum(['minutes','topics','projects']),track:z.string().refine(x=>x==='all'||tracks.some(t=>t.id===x))}).strict();
export async function GET(){try{const user=await getChatGPTUser();if(!user)return Response.json({error:'Entre para acessar seus estudos.'},{status:401});
 const result=await database().prepare('SELECT kind,id,payload FROM records WHERE owner = ?').bind(user.userId).all<{kind:string;id:string;payload:string}>();
 const state:State=structuredClone(emptyState);
 for(const row of result.results){const val=JSON.parse(row.payload);if(row.kind==='topic')state.topics[row.id]=val;else if(row.kind==='project')state.projects[row.id]=val;else if(row.kind==='session')state.sessions.push(val);else if(row.kind==='goal')state.goals.push(val);}
 state.sessions.sort((a,b)=>b.date.localeCompare(a.date));return Response.json(state,{headers:{'Cache-Control':'no-store'}});
 }catch(e){console.error('Read failed',e);return Response.json({error:'Não foi possível carregar seus estudos. Tente novamente.'},{status:503});}}
export async function POST(req:Request){try{const user=await getChatGPTUser();if(!user)return Response.json({error:'Entre para salvar.'},{status:401});
 const origin=req.headers.get('origin');if(origin&&origin!==new URL(req.url).origin)return Response.json({error:'Origem inválida'},{status:403});
 const body=z.object({kind:z.enum(['topic','project','session','goal']),id:z.string().min(1).max(100),value:z.unknown(),remove:z.boolean().optional()}).strict().parse(await req.json());const {kind,id}=body;
 if(kind==='topic'&&!topics.some(t=>t.id===id)||kind==='project'&&!projects.some(p=>p.id===id))return Response.json({error:'Registro inválido'},{status:400});
 if(body.remove){if(!['session','goal'].includes(kind))return Response.json({error:'Operação inválida'},{status:400});await database().prepare('DELETE FROM records WHERE owner = ? AND kind = ? AND id = ?').bind(user.userId,kind,id).run();return Response.json({ok:true});}
 const val=(kind==='topic'?topicSchema:kind==='project'?projectSchema:kind==='session'?sessionSchema:goalSchema).parse(body.value);
 if((kind==='session'||kind==='goal')&&('id' in val&&val.id!==id))return Response.json({error:'Identificação inválida'},{status:400});
 if(kind==='topic'&&'exercises' in val){const t=topics.find(t=>t.id===id)!;if(val.exercises.some((e:string)=>!t.exercises.includes(e)))return Response.json({error:'Exercício inválido'},{status:400});}
 await database().prepare('INSERT INTO records (owner,kind,id,payload) VALUES (?,?,?,?) ON CONFLICT(owner,kind,id) DO UPDATE SET payload=excluded.payload').bind(user.userId,kind,id,JSON.stringify(val)).run();
 return Response.json({ok:true});
 }catch(e){if(e instanceof z.ZodError||e instanceof SyntaxError)return Response.json({error:e instanceof z.ZodError?e.issues.map(i=>i.message).join('; '):'Dados inválidos'},{status:400});console.error('Save failed',e);return Response.json({error:'Não foi possível salvar. Seu formulário foi preservado.'},{status:503});}}
