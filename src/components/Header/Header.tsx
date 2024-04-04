import { Button, Text } from '@/components/base';
import { LogoIcon, MenuIcon, PhoneIcon } from '@/components/base/Icons';
import { links } from '@/utils/const';
import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = memo(({ className }: HeaderProps) => (
  <header className={cls([styles.Header, className])}>
    <LogoIcon className={styles.logo} />
    <ul className={styles.list_links}>
      {links.map(link => (
        <li className={styles.wrapper_link} key={link}>
          <a className={styles.link} href="#" tabIndex={1}>
            <Text font={'montserrat'} size={'xs'} text={link} />
          </a>
        </li>
      ))}
    </ul>

    <div className={styles.tels}>
      <Button className={styles.menu}>
        <MenuIcon />
      </Button>
      <a className={styles.wrapper_number} href="tel:8-345-123-34-45">
        <PhoneIcon />
        <Text className={styles.number} font={'montserrat'} size={'m'} text={'8-345-123-34-45'} />
      </a>
    </div>
  </header>
));
