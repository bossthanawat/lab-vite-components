import { ElementType, lazy, Suspense } from 'react';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  );

export const HomePage = Loadable(lazy(() => import('../pages/Home')));
export const AboutPage = Loadable(lazy(() => import('../pages/About')));