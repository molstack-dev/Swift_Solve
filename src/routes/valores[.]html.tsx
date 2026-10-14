import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/valores.html')({ beforeLoad: () => { throw redirect({ to: '/valores' }); } });
