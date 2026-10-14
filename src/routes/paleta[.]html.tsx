import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/paleta.html')({ beforeLoad: () => { throw redirect({ to: '/paleta' }); } });
