import { Text } from '@/components/base';
import { cls } from '@/utils/helpers';
import {
  type ChangeEvent,
  type InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
} from 'react';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;
export type InputColor = 'default' | 'primary';

interface InputProps extends HTMLInputProps {
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  autofocus?: boolean;
  className?: string;
  color?: InputColor;
  error?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    addonLeft,
    addonRight,
    autofocus,
    className,
    color = 'default',
    error,
    label,
    onChange,
    placeholder,
    type = 'text',
    value,
    ...otherProps
  } = props;

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {label && <Text size={'s'} text={label} />}
      <div className={cls([styles.Input, className])}>
        {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
        <input
          autoFocus={autofocus}
          className={cls([styles[color]])}
          onChange={onChangeHandler}
          placeholder={placeholder}
          ref={ref}
          type={type}
          value={value}
          {...otherProps}
        />
        {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
      </div>
      {error && <Text className={styles.input_error} size={'xs'} text={error} />}
    </div>
  );
});
