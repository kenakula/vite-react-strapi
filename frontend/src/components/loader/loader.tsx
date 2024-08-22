import { Loader as MantineLoader } from '@mantine/core';
import { ReactElement } from 'react';

import classes from './loader.module.css';

export const Loader = (): ReactElement => (
  <div className={classes.container}>
    <MantineLoader size="xl" type="dots" c="blue" />
  </div>
);
