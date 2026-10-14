import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { CompanyContent, ContactBand, PageIntro } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/paleta')({ head: () => pageHead('Identidad visual', 'Verde, negro y blanco. Una identidad que refleja innovación, confianza y claridad.'), component: Page });
function Page() {return <SiteLayout><PageIntro eyebrow="Nuestra identidad" title="Identidad visual" description="Verde, negro y blanco. Una identidad que refleja innovación, confianza y claridad."/><section className="shell section"><CompanyContent kind="paleta"/></section><ContactBand/></SiteLayout>}
