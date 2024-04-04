import { Loader } from '@/components/base';
import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
    <div className={cls([styles.PageLoader, className])}>
      <Loader />
    </div>
  );
});
