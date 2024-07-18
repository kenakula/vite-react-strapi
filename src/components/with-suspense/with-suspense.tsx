import { lazy, ReactElement, Suspense } from 'react';

interface IProps {
  path: string;
}

export const WithSuspense = ({ path }: IProps): ReactElement => {
  const LazyComponent = lazy(() => import(`../../pages/${path}/${path}.tsx`));

  return (
    <Suspense fallback={<h1>LOADING</h1>}>
      <LazyComponent />
    </Suspense>
  );
};
