import clsx from 'clsx';
import { HTMLProps, ReactElement } from 'react';

import styles from './skeleton.module.css';

interface IProps extends HTMLProps<HTMLDivElement> {
  type?: 'text' | 'avatar' | 'block';
}

export const Skeleton = ({ type = 'text', className, ...rest }: IProps): ReactElement => {
  const skeletonClassName = clsx(styles.skeleton, className, {
    [styles.skeletonBlock]: type === 'block',
    [styles.skeletonAvatar]: type === 'avatar',
  });

  return (
    <div className={skeletonClassName} data-testid={`skeleton_${type}`} {...rest} />
  );
};
