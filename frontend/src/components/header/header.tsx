import { authStoreSelector, useAppSelector } from '@app/store';
import { AppShell, Burger, Text } from '@mantine/core';
import { HOME_ROUTE } from '@shared/constants';
import { memo, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { UserMenu } from './components';
import classes from './header.module.css';

interface IProps {
  withNav?: boolean;
  isNavOpened?: boolean;
  toggleNav?: () => void;
}

const HeaderComponent = ({ withNav = false, isNavOpened, toggleNav }: IProps): ReactElement => {
  const { isAuthenticated, user } = useAppSelector(authStoreSelector);

  return (
    <AppShell.Header classNames={{ header: classes.header }}>
      {withNav && (
        <Burger
          className={classes.burger}
          opened={isNavOpened}
          onClick={toggleNav}
          hiddenFrom="sm"
          size="sm"
        />
      )}
      <Text component={Link} className={classes.logo} to={HOME_ROUTE}>Logo</Text>
      {isAuthenticated && <UserMenu user={user}/>}
    </AppShell.Header>
  );
};

export const Header = memo(HeaderComponent);
