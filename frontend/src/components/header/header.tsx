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
          hiddenFrom="sm"
          opened={isNavOpened}
          size="sm"
          onClick={toggleNav}
        />
      )}
      <Text className={classes.logo} component={Link} fw={600} size="lg" to={HOME_ROUTE}>Logo</Text>
      {isAuthenticated && <UserMenu user={user}/>}
    </AppShell.Header>
  );
};

export const Header = memo(HeaderComponent);
