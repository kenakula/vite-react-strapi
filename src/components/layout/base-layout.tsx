import { PropsWithChildren, ReactElement } from 'react';

import { Header } from './components';

export const BaseLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};
