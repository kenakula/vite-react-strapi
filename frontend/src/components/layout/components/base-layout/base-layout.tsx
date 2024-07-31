import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';

export const BaseLayout = (): ReactElement => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);
