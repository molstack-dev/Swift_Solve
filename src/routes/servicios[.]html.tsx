import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/servicios.html')({ beforeLoad: () => { throw redirect({ to: '/servicios' }); } });
