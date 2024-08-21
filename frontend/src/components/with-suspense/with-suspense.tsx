import { PropsWithChildren, ReactElement, Suspense } from 'react';

interface IProps extends PropsWithChildren {
  fallback?: ReactElement;
}

export const WithSuspense = ({ children, fallback }: IProps): ReactElement => {
  return (
    <Suspense fallback={fallback ?? <span>loading ...</span>}>
      {children}
    </Suspense>
  );
};
