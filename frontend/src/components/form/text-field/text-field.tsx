import { Label } from '@components/form/label/label';
import clsx from 'clsx';
import { Field } from 'formik';
import { ReactElement, useId } from 'react';

import styles from './text-field.module.css';

interface IProps extends Partial<HTMLInputElement> {
  name: string;
  label: string;
  hiddenLabel?: boolean;
}

export const TextField = ({ name, hiddenLabel, label, className, ...rest }: IProps): ReactElement => {
  const id = useId();

  return (
    <div className={clsx(styles.fieldContainer)}>
      {label && <Label id={id} text={label} isHidden={hiddenLabel} />}
      <div className={styles.fieldWrapper}>
        <Field {...rest} id={id} type="text" name={name} className={clsx(styles.field, className)}  />
      </div>
    </div>
  );
};
