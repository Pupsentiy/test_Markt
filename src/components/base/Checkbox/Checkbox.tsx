import { cls } from '@/utils/helpers';
import React, { type InputHTMLAttributes, ReactNode } from 'react';

import styles from './Checkbox.module.scss';

type Type = 'checkbox' | 'radio';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: ReactNode | string;
  type: Type;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { className, label, type, ...rest } = props;
  return (
    <label className={cls([styles.label, className])}>
      <input className={styles.Check} ref={ref} type={type} {...rest} />
      <span className={cls(['check', styles.customCheck, styles[type]])} />
      <span className={styles.text}>{label}</span>
    </label>
  );
});
