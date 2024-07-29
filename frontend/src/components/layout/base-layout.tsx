import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';

export const BaseLayout = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
