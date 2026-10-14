import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/metodologia.html')({ beforeLoad: () => { throw redirect({ to: '/metodologia' }); } });
