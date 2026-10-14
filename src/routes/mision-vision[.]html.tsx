import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/mision-vision.html')({ beforeLoad: () => { throw redirect({ to: '/mision-vision' }); } });
