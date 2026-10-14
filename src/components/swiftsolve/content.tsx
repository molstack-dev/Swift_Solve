import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, Copy, Check, Target, Eye } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/swiftsolve';
import company from '@/data/company.json';
type CompanyBlock = { title: string; paragraphs: string[]; items: string[] };
const companySections: Record<'estructura'|'mision-vision'|'valores'|'paleta', CompanyBlock[]> = company;
export function ServiceGrid({limit}: {limit?:number}) { return <div className="service-grid">{services.slice(0,limit).map((s,i)=><article className="service-card" key={s.title}><div className="service-photo"><img src={s.image} alt={s.title} loading="lazy" width="640" height="360"/><span className="service-number">0{i+1}</span></div><div className="service-body"><span className="eyebrow">{s.category}</span><h3>{s.title}<s.icon size={22}/></h3><p>{s.description}</p><Button variant="link" asChild className="service-link"><Link to="/contactos">Hablemos de tu proyecto <ArrowUpRight size={16}/></Link></Button></div></article>)}</div>; }
export function ContactBand() {return <section className="contact-band"><div className="shell"><div><span className="eyebrow">TU PRÓXIMO PASO</span><h2>Las grandes soluciones<br/>empiezan con una conversación.</h2></div><Button asChild size="lg"><Link to="/contactos">Hablemos de tu proyecto <ArrowUpRight/></Link></Button></div></section>}
export function PageIntro({eyebrow,title,description}:{eyebrow:string;title:string;description:string}) {return <div className="page-intro shell"><Link to="/" className="breadcrumb">Inicio <ArrowRight size={13}/> {eyebrow}</Link><span className="eyebrow">{eyebrow}</span><h1>{title}<span className="brand-dot">.</span></h1><p>{description}</p></div>}
export function MethodSteps({compact=false}:{compact?:boolean}) {return <div className={compact?'method-steps compact':'method-steps'}>{company.metodologia.map((s,i)=><article key={s.title}><span className="step-number">0{i+1}</span><h3>{s.title}</h3><p>{s.paragraphs[0]}</p></article>)}</div>}
export function CompanyContent({kind}:{kind:'estructura'|'mision-vision'|'valores'|'paleta'}) {
 const [copied,setCopied]=useState<number|null>(null);const [copyError,setCopyError]=useState(false);
 const colors=['#00D084','#0A0A0A','#FFFFFF'];
 return <div className={`company-content ${kind}`}>
 {companySections[kind].map((block,i)=><article className="company-block" key={block.title}>
 {kind==='paleta'?<Button className={`swatch swatch-${i}`} aria-label={`Copiar color ${colors[i]}`} onClick={async()=>{const color=colors[i];if(!color)return;try{await navigator.clipboard.writeText(color);setCopied(i);setCopyError(false)}catch{setCopyError(true)}}}><span>{copied===i?'Copiado':colors[i]}</span>{copied===i?<Check/>:<Copy/>}</Button>:<span className="content-icon">{kind==='mision-vision'?(i===0?<Target/>:<Eye/>):String(i+1).padStart(2,'0')}</span>}
 <h2>{block.title}</h2>{block.paragraphs.map(p=><p key={p}>{p}</p>)}{block.items.length>0&&<ul>{block.items.map(item=>{const [name,...rest]=item.split(':');return <li key={item}><strong>{name}</strong><p>{rest.join(':').trim()}</p></li>})}</ul>}
 </article>)}{copyError&&<p role="alert">No se pudo copiar el color. Puedes seleccionar su código.</p>}
 </div>;
}
