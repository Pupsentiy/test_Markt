import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './Text.module.scss';

export type TextAlign = 'center' | 'left' | 'right';

export type TextSize = 'l' | 'm' | 's' | 'xl' | 'xs' | 'xxl';

interface TextProps {
  align?: TextAlign;
  bold?: boolean;
  className?: string;
  font?: string;
  size?: TextSize;
  text?: string;
  title?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const mapSizeToClass: Record<TextSize, string> = {
  l: styles.size_l,
  m: styles.size_m,
  s: styles.size_s,
  xl: styles.size_xl,
  xs: styles.size_xs,
  xxl: styles.size_xxl,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  l: 'h3',
  m: 'h4',
  s: 'h5',
  xl: 'h2',
  xs: 'h6',
  xxl: 'h1',
};

export const Text = memo(
  ({ align = 'left', bold, className, font = 'raleway', size = 'm', text, title }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    return (
      <div
        className={cls([styles.Text, styles[align], styles[font], sizeClass, className], {
          [styles.bold]: Boolean(bold),
        })}
      >
        {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  },
);
