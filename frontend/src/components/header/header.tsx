import { AppShell, Burger } from '@mantine/core';
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SIGNUP_ROUTE } from '@shared/constants';
import { memo, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.css';

interface IProps {
  withNav?: boolean;
  isNavOpened?: boolean;
  toggleNav?: () => void;
}

const HeaderComponent = ({ withNav = false, isNavOpened, toggleNav }: IProps): ReactElement => {

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
      <Link to={HOME_ROUTE} className={classes.logo}>Logo</Link>
      <nav>
        <ul className={classes.menu}>
          <li>
            <Link to={HOME_ROUTE}>HOME</Link>
          </li>
          <li>
            <Link to={PROFILE_ROUTE}>PROFILE</Link>
          </li>
          <li>
            <Link to={LOGIN_ROUTE}>LOGIN</Link>
          </li>
          <li>
            <Link to={SIGNUP_ROUTE}>SIGNUP</Link>
          </li>
        </ul>
      </nav>
    </AppShell.Header>
  );
};

export const Header = memo(HeaderComponent);
