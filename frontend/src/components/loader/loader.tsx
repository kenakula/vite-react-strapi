import { Loader as MantineLoader } from '@mantine/core';
import { ReactElement } from 'react';

import classes from './loader.module.css';

export const Loader = (): ReactElement => (
  <div className={classes.container}>
    <MantineLoader c="blue" size="xl" type="dots" />
  </div>
);
