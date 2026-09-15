import Hub from '../hub';
import {requireChatGPTUser} from '../chatgpt-auth';
import {notFound} from 'next/navigation';
export const dynamic='force-dynamic';
export default async function Page({params}:{params:Promise<{path:string[]}>}){const {path}=await params;const view=path.join('/');if(!['roadmaps','java','english','c','lua','python','algorithms','cs','projects','studies','progress','mentor'].includes(view))notFound();await requireChatGPTUser('/'+view);return <Hub view={view}/>;}
