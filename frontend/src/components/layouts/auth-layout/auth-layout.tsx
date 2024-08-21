import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = (): ReactElement => (
  <div className="auth-layout">
    <Outlet/>
  </div>
);
