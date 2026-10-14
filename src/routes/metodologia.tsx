import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { ContactBand, MethodSteps, PageIntro } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/metodologia')({head:()=>pageHead('Metodología de trabajo','De los requisitos a la entrega: conoce el proceso ágil de SwiftSolve, con diseño UX/UI, desarrollo, calidad y soporte continuo.'),component:Page});
function Page(){return <SiteLayout><PageIntro eyebrow="Cómo trabajamos" title="De la idea a la solución" description="Un proceso transparente, colaborativo y orientado a resultados. Profesionalismo y estructura en cada proyecto."/><section className="shell section"><MethodSteps/></section><ContactBand/></SiteLayout>}
