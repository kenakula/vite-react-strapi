import clsx from 'clsx';
import { HTMLProps, PropsWithChildren, ReactElement } from 'react';

import styles from './container.module.css';

type TContainerProps = PropsWithChildren & HTMLProps<HTMLDivElement>;

export const Container = ({ children, className, ...props }: TContainerProps): ReactElement => (
  <div data-testid="container" className={clsx(styles.container, className)} {...props}>
    {children}
  </div>
);
