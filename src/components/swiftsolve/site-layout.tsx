import { Link } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, ChevronDown, Headphones, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png.asset.json';
import sena from '@/assets/logo-sena-verde.png.asset.json';
import audio from '@/assets/Discurso.mp3.asset.json';
import { companyLinks } from '@/data/swiftsolve';
export function SiteLayout({ children }: { children: ReactNode }) {
 const [menu, setMenu] = useState(false); const [audioOpen, setAudioOpen] = useState(false); const [surprise, setSurprise] = useState(false);
 useEffect(() => { let keys: string[] = []; let timer: ReturnType<typeof setTimeout> | undefined; const handle = (e: KeyboardEvent) => { keys = [...keys, e.key].slice(-10); if (keys.join(',') === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a') { setSurprise(true); timer = setTimeout(() => setSurprise(false), 2000); } }; window.addEventListener('keydown', handle); return () => { window.removeEventListener('keydown', handle); clearTimeout(timer); }; }, []);
 return <div className={surprise ? 'site surprise' : 'site'}>
  <header className="site-header"><div className="shell header-inner">
   <Link to="/" className="brand" aria-label="SwiftSolve, inicio"><img src={logo.url} alt="" width="38" height="38" /><span>SwiftSolve<span className="brand-dot">.</span></span></Link>
   <nav className="desktop-nav" aria-label="Navegación principal">
    <Link to="/" activeOptions={{exact:true}} activeProps={{className:'active'}}>Inicio</Link><Link to="/servicios" activeProps={{className:'active'}}>Servicios</Link>
    <div className="company-menu"><Button variant="ghost" className="nav-menu-button">Nosotros <ChevronDown size={13}/></Button><div className="company-dropdown">{companyLinks.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}</div></div>
    <Link to="/metodologia" activeProps={{className:'active'}}>Metodología</Link><Link to="/contactos" activeProps={{className:'active'}}>Contacto</Link>
   </nav>
   <div className="header-actions"><Button variant="ghost" size="icon" title="Escuchar presentación" aria-label="Escuchar presentación" onClick={()=>setAudioOpen(!audioOpen)}><Headphones/></Button><Button variant="ghost" size="icon" className="mobile-toggle" aria-label={menu?'Cerrar menú':'Abrir menú'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</Button></div>
  </div>{menu && <nav className="mobile-nav" aria-label="Menú móvil">{[{to:'/',label:'Inicio'}, {to:'/servicios',label:'Servicios'},...companyLinks,{to:'/metodologia',label:'Metodología'},{to:'/contactos',label:'Contacto'}].map(l=><Link key={l.to} to={l.to} onClick={()=>setMenu(false)}>{l.label}<ArrowUpRight size={16}/></Link>)}</nav>}</header>
  {audioOpen && <div className="audio-panel"><div><Headphones size={18}/><span>Conoce SwiftSolve</span><Button variant="ghost" size="icon" aria-label="Cerrar audio" onClick={()=>setAudioOpen(false)}><X/></Button></div><audio controls autoPlay src={audio.url}>Tu navegador no admite audio.</audio></div>}
  <main>{children}</main>
  <footer className="site-footer shell"><div className="footer-top"><div><Link to="/" className="brand"><img src={logo.url} alt="" width="32" height="32"/><span>SwiftSolve<span className="brand-dot">.</span></span></Link><p>Innovación que se convierte en soluciones.</p></div><div className="footer-links"><Link to="/servicios">Servicios</Link><Link to="/metodologia">Metodología</Link><Link to="/contactos">Contacto</Link></div><div className="footer-links">{companyLinks.map(l=><Link key={l.to} to={l.to}>{l.label}</Link>)}</div></div><div className="footer-bottom"><span>© 2026 SwiftSolve. Todos los derechos reservados.</span><span>Innovación · Calidad · Compromiso</span><img src={sena.url} alt="SENA" width="47" height="47" loading="lazy"/></div></footer>

 </div>;
}
