import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { CompanyContent, ContactBand, PageIntro } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/valores')({ head: () => pageHead('Nuestros valores', 'Los principios que guían nuestras decisiones, nuestras relaciones y cada solución que desarrollamos.'), component: Page });
function Page() {return <SiteLayout><PageIntro eyebrow="Lo que nos mueve" title="Nuestros valores" description="Los principios que guían nuestras decisiones, nuestras relaciones y cada solución que desarrollamos."/><section className="shell section"><CompanyContent kind="valores"/></section><ContactBand/></SiteLayout>}
