import { authStoreSelector, useAppSelector } from '@app/store';
import { useGetAppDataQuery } from '@app/store/app';
import { useLazyGetMeQuery } from '@app/store/auth';
import { Header } from '@components/header';
import { Loader } from '@components/loader';
import { Navbar } from '@components/navbar';
import { AppShell, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LOGIN_ROUTE } from '@shared/constants';
import { FC, useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import classes from './private-layout.module.css';

interface IProps {
  redirectPath?: string;
}

export const PrivateLayout: FC<IProps> = ({ redirectPath = LOGIN_ROUTE }) => {
  useGetAppDataQuery();

  const [authChecked, setAuthChecked] = useState(false);

  const [triggerGetMe] = useLazyGetMeQuery();

  const { isLoading, user } = useAppSelector(authStoreSelector);

  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const [isMinimizedNavBar, setIsMinimizedNavBar] = useState(false);

  useEffect(() => {
    triggerGetMe().unwrap().finally(() => {
      setAuthChecked(true);
    });
  }, []);

  if (isLoading || !authChecked) return <Loader />;

  if (!user && authChecked) return <Navigate state={{ redirectTo: location }} to={redirectPath} replace />;

  const handleMinimizeNavBar = (): void => {
    setIsMinimizedNavBar(prev => !prev);
  };

  return (
    <AppShell
      className="private-layout"
      classNames={{
        navbar: classes.navbar
      }}
      header={{ height: 50 }}
      navbar={{
        width: isMinimizedNavBar ? 50 : { sm: 150, md: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="sm"
    >
      <Header isNavOpened={opened} toggleNav={toggle} withNav />
      <Navbar handleMinimize={handleMinimizeNavBar} isMinimized={isMinimizedNavBar} />
      <AppShell.Main>
        <Container px={0}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
