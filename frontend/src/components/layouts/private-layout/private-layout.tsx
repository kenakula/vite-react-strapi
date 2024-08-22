import { useGetAppDataQuery } from '@app/store/app';
import { useGetMeQuery } from '@app/store/auth';
import { Header } from '@components/header';
import { Loader } from '@components/loader';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LOGIN_ROUTE } from '@shared/constants';
import { FC, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import classes from './private-layout.module.css';

interface IProps {
  redirectPath?: string;
}

export const PrivateLayout: FC<IProps> = ({ redirectPath = LOGIN_ROUTE }) => {
  useGetAppDataQuery();

  const { data, isLoading } = useGetMeQuery();
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const [isMinimizedNavBar, setIsMinimizedNavBar] = useState(false);

  if (isLoading) return <Loader />;

  if (!data) return <Navigate to={redirectPath} replace state={{ redirectTo: location }} />;

  const handleMinimizeNavBar = (): void => {
    setIsMinimizedNavBar(prev => !prev);
  };

  return (
    <AppShell
      header={{ height: 50 }}
      navbar={{
        width: isMinimizedNavBar ? 50 : { sm: 150, md: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="sm"
      classNames={{
        navbar: classes.navbar
      }}
      className="private-layout"
    >
      <Header isNavOpened={opened} toggleNav={toggle} withNav />
      <AppShell.Navbar>Navbar <button onClick={handleMinimizeNavBar}>M</button></AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
