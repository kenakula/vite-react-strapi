import BoxIcon from '@media/icons/box.svg?react';
import { ReactElement } from 'react';

import styles from './logo.module.css';

export const Logo = (): ReactElement => {
  return (
    <a href="/" className={styles.logo}>
      <BoxIcon />
      <span>Logo</span>
    </a>
  );
};
