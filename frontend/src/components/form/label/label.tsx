import clsx from 'clsx';
import { ReactElement } from 'react';

import styles from './label.module.css';

interface IProps {
  id: string;
  isHidden?: boolean;
  text: string;
}

export const Label = ({ id, text, isHidden }: IProps): ReactElement =>
  <label htmlFor={id} className={clsx(styles.label, { 'visually-hidden': isHidden })}>{text}</label>;
