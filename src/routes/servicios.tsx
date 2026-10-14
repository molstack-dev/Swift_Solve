import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { ContactBand, PageIntro, ServiceGrid } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/servicios')({ head:()=>pageHead('Servicios de desarrollo','Software a medida, aplicaciones web, apps móviles, automatización, integración de APIs y ciberseguridad con SwiftSolve.'), component:Page });
function Page(){return <SiteLayout><PageIntro eyebrow="Lo que hacemos" title="Nuestros servicios" description="Cada desafío es una oportunidad. Creamos soluciones tecnológicas que se adaptan a ti y crecen con tu negocio."/><section className="shell section"><ServiceGrid/></section><ContactBand/></SiteLayout>}
