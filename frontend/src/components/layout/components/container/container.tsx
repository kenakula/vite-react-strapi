import clsx from 'clsx';
import { HTMLProps, PropsWithChildren, ReactElement } from 'react';

import styles from './container.module.css';

type TContainerProps = PropsWithChildren & HTMLProps<HTMLDivElement>;

export const Container = ({ children, ...props }: TContainerProps): ReactElement => (
  <div className={clsx(styles.container, props.className)} {...props}>
    {children}
  </div>
);
