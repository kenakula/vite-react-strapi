import { Spinner } from '@components/spinner';
import { PropsWithChildren, ReactElement, Suspense } from 'react';

export const WithSuspense = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Suspense fallback={<Spinner />}>
      {children}
    </Suspense>
  );
};
