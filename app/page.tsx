import Hub from './hub';
import {requireChatGPTUser} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/');return <Hub view="dashboard"/>;}
