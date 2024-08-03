import { Menu } from '@components/menu';
import { ReactElement } from 'react';

import styles from './header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={styles.header} data-testid="header">
      <div>
        <button className={styles.headerButton}>menu</button>
        <p>TR</p>
        <Menu/>
      </div>
    </header>
  );
};
