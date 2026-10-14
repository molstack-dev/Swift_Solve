import s1 from '@/assets/servicio1.png.asset.json';
import s2 from '@/assets/servicio2.png.asset.json';
import s3 from '@/assets/servicio3.png.asset.json';
import s4 from '@/assets/servicio4.png.asset.json';
import s5 from '@/assets/servicio5.png.asset.json';
import s6 from '@/assets/servicio6.png.asset.json';
import { Code2, Globe2, Smartphone, Workflow, Cable, ShieldCheck } from 'lucide-react';
export const services = [
 { title: 'Desarrollo a medida', category: 'SOFTWARE PERSONALIZADO', description: 'Creamos soluciones personalizadas, adaptadas a las necesidades específicas de cada proyecto, asegurando eficiencia, escalabilidad y alto rendimiento.', image: s1.url, icon: Code2 },
 { title: 'Aplicaciones web', category: 'EXPERIENCIAS DIGITALES', description: 'Diseñamos y programamos aplicaciones web modernas, seguras y responsivas para mejorar la experiencia de usuario y optimizar los procesos empresariales.', image: s2.url, icon: Globe2 },
 { title: 'Apps móviles', category: 'CONECTIVIDAD SIN LÍMITES', description: 'Creamos aplicaciones móviles con tecnología de vanguardia, garantizando funcionalidad, usabilidad y una experiencia fluida en todas las plataformas.', image: s3.url, icon: Smartphone },
 { title: 'Automatización', category: 'PROCESOS INTELIGENTES', description: 'Implementamos soluciones que automatizan tareas repetitivas y mejoran la eficiencia operativa en diversas áreas empresariales.', image: s4.url, icon: Workflow },
 { title: 'Integración de APIs', category: 'SISTEMAS CONECTADOS', description: 'Conectamos y sincronizamos diferentes plataformas, bases de datos y servicios a través de integraciones personalizadas con APIs.', image: s5.url, icon: Cable },
 { title: 'Ciberseguridad', category: 'PROTECCIÓN DIGITAL', description: 'Garantizamos la seguridad de la información con soluciones avanzadas de protección contra amenazas cibernéticas y vulnerabilidades.', image: s6.url, icon: ShieldCheck },
];
export const companyLinks = [
 { to: '/estructura', label: 'Estructura' }, { to: '/mision-vision', label: 'Misión y visión' }, { to: '/valores', label: 'Valores' }, { to: '/paleta', label: 'Identidad visual' },
] as const;
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | SwiftSolve` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | SwiftSolve` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
