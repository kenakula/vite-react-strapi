import { Menu } from '@components/menu/menu';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const PrivateLayout = (): ReactElement => {
  return (
    <>
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};
