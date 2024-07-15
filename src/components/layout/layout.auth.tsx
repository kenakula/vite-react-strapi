import { Menu } from '@components/menu/menu';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutAuth = (): ReactElement => (
  <div className="auth-layout">
    <header>
      <Menu/>
    </header>
    <Outlet/>
  </div>
);
