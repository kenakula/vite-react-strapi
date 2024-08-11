import { Container } from '@components/container';
import { Logo } from '@components/logo';
import { ReactElement } from 'react';

import { GlobalSearch, UserMenu } from './components';
import styles from './header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header} data-testid="header">
      <Container className={styles.headerContainer}>
        <Logo />
        <div className={styles.headerSearchContainer}>
          <GlobalSearch />
        </div>
        <UserMenu />
      </Container>
    </header>
  );
};
