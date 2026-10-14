import { createFileRoute } from '@tanstack/react-router';
import { SiteLayout } from '@/components/swiftsolve/site-layout';
import { CompanyContent, ContactBand, PageIntro } from '@/components/swiftsolve/content';
import { pageHead } from '@/data/swiftsolve';
export const Route = createFileRoute('/estructura')({ head: () => pageHead('Estructura empresarial', 'Experiencia técnica y visión estratégica, conectadas en cada nivel de nuestra organización.'), component: Page });
function Page() {return <SiteLayout><PageIntro eyebrow="Nuestro equipo" title="Estructura empresarial" description="Experiencia técnica y visión estratégica, conectadas en cada nivel de nuestra organización."/><section className="shell section"><CompanyContent kind="estructura"/></section><ContactBand/></SiteLayout>}
