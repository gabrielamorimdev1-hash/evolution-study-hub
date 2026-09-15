import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Evolution — Sua central de estudos',description:'Roadmaps, projetos e prática: acompanhe sua evolução em desenvolvimento e inglês.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className="dark"><body>{children}</body></html>;}
