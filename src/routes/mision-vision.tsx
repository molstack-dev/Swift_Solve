import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { CompanyContent, ContactBand, PageIntro } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/mision-vision')({ head: () => pageHead('Misión y visión', 'Tecnología que genera oportunidades. Una visión compartida para un futuro más conectado, eficiente y accesible.'), component: Page });
function Page() {return <SiteLayout><PageIntro eyebrow="Nuestro propósito" title="Misión y visión" description="Tecnología que genera oportunidades. Una visión compartida para un futuro más conectado, eficiente y accesible."/><section className="shell section"><CompanyContent kind="mision-vision"/></section><ContactBand/></SiteLayout>}
