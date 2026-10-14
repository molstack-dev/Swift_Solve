import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/intro.html')({ beforeLoad: () => { throw redirect({ to: '/' }); } });
