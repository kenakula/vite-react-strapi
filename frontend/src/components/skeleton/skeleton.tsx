import clsx from 'clsx';
import { HTMLProps, ReactElement } from 'react';

import styles from './skeleton.module.css';

interface IProps extends HTMLProps<HTMLDivElement> {
  type?: 'text' | 'avatar' | 'block';
}

export const Skeleton = ({ type = 'text', className, ...rest }: IProps): ReactElement => {

  return (
    <div className={clsx(styles.skeleton, className)} data-testid={`skeleton_${type}`} {...rest} />
  );
};
