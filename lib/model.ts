export type Skill = 'Listening'|'Speaking'|'Reading'|'Writing';
export type Topic = {id:string;track:string;stage:string;title:string;objective:string;content:string[];exercises:string[];deliverables:string[];prerequisites:string[];duration:string;source:string;skills:Skill[]};
export type Track = {id:string;title:string;short:string;description:string;color:string;main:boolean;source:string;strategies:string[];stages:string[]};
export type Project = {id:string;track:string;title:string;difficulty:string;technologies:string[];requirements:string[];practice:string[];deliverables:string[];source:string};
export type TopicRecord = {status:'new'|'studying'|'done';notes:string;studied:boolean;practiced:boolean;difficulty:string;exercises:string[]};
export type ProjectRecord = {status:'new'|'studying'|'done';notes:string;github:string};
export type Session = {id:string;date:string;track:string;topic:string;minutes:number;difficulty:string;notes:string;activity:string;skill:Skill|''};
export type Goal = {id:string;title:string;target:number;kind:'minutes'|'topics'|'projects';track:string};
export type State = {topics:Record<string,TopicRecord>;projects:Record<string,ProjectRecord>;sessions:Session[];goals:Goal[]};
export const blankTopic:TopicRecord={status:'new',notes:'',studied:false,practiced:false,difficulty:'Média',exercises:[]};
export const blankProject:ProjectRecord={status:'new',notes:'',github:''};
export const emptyState:State={topics:{},projects:{},sessions:[],goals:[]};
export function today(){return new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo'}).format(new Date());}
export function dateBack(n:number,from=today()){const d=new Date(from+'T12:00:00Z');d.setUTCDate(d.getUTCDate()-n);return d.toISOString().slice(0,10);}
export function stats(state:State,topics:Topic[]){
 const done=topics.filter(t=>state.topics[t.id]?.status==='done').length;
 const minutes=state.sessions.reduce((s,x)=>s+x.minutes,0);
 const projects=Object.values(state.projects).filter(x=>x.status==='done').length;
 const days=new Set(state.sessions.map(x=>x.date));let streak=0;let start=days.has(today())?0:1;
 while(days.has(dateBack(start+streak)))streak++;
 let bestStreak=0;let run=0;let previous='';for(const day of [...days].sort()){run=previous===dateBack(1,day)?run+1:1;bestStreak=Math.max(bestStreak,run);previous=day;}
 const xp=done*50+projects*200+Math.floor(minutes/5)*5;
 return {done,minutes,projects,streak,bestStreak,xp,level:1+Math.floor(xp/500),progress:topics.length?Math.round(done/topics.length*100):0};
}
