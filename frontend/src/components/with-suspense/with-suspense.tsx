import { PropsWithChildren, ReactElement, Suspense } from 'react';

export const WithSuspense = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>
      {children}
    </Suspense>
  );
};
