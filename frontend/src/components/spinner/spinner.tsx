import { ReactElement } from 'react';

import styles from './spinner.module.css';

export const Spinner = (): ReactElement => (
  <div className={styles.ldsRoller} data-testid="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
