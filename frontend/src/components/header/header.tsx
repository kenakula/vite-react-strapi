import { Container } from '@components/container';
import { Logo } from '@components/logo';
import { Menu } from '@components/menu';
import { ReactElement } from 'react';

import styles from './header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header} data-testid="header">
      <Container className={styles.headerContainer}>
        <Logo />
        <Menu/>
      </Container>
    </header>
  );
};
