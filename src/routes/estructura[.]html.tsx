import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/estructura.html')({ beforeLoad: () => { throw redirect({ to: '/estructura' }); } });
