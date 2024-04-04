import { getCourseGbp } from '@/api';
import mentor from '@/assets/img/mentor.png';
import { Button, Text } from '@/components/base';
import { BVectorIcon, VectorIcon } from '@/components/base/Icons';
import { breakpoint } from '@/utils/const';
import { cls, totalDate } from '@/utils/helpers';
import { useWindowSize } from '@/utils/hooks';
import { useEffect, useMemo, useState } from 'react';

import styles from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
  onShowModal: () => void;
}

const MainPage = ({ className, onShowModal }: MainPageProps) => {
  const [courseGBP, setCourseGBP] = useState(0);
  const [width] = useWindowSize();
  const sum = useMemo(() => totalDate(), []);

  useEffect(() => {
    (async () => {
      const gpb = await getCourseGbp();
      if (gpb) {
        setCourseGBP(gpb);
      }
    })();
  }, []);

  return (
    <div className={cls([styles.MainPage, className])}>
      <div className={styles.main}>
        <div className={styles.banner}>
          <div className={styles.title}>
            <Text size={'xxl'} title={'Создаю условия для вашего успеха'} />
          </div>
          <div className={styles.subtitle}>
            <Text
              size={'s'}
              text={
                width > breakpoint.tp
                  ? 'Когда ваше время и энергия лучше сфокусированы, \n ' +
                    'стремление к новым возможностям становится реальностью,  ' +
                    'ваш успех зависит от ваших действий'
                  : 'Ваш успех зависит от ваших действий'
              }
            />
          </div>
          <div className={styles.main_action}>
            <Button
              addonRight={
                breakpoint.mpm !== width ? (
                  <VectorIcon className={styles.vector} />
                ) : (
                  <BVectorIcon className={styles.vector} />
                )
              }
              color={'primary'}
            >
              <Text
                bold
                className={styles.button_text}
                text={width > breakpoint.tls ? 'Записаться на консультацию' : 'Записаться'}
              />
            </Button>
            <Button
              addonRight={
                breakpoint.mpm !== width ? (
                  <VectorIcon className={styles.vector} />
                ) : (
                  <BVectorIcon className={styles.vector} />
                )
              }
              color={'transparent'}
              onClick={onShowModal}
            >
              <Text
                bold
                className={styles.button_text}
                text={width > breakpoint.tls ? 'Бесплатная консультация' : 'Заказать звонок'}
              />
            </Button>
          </div>
        </div>

        <div className={styles.wrapper_result}>
          <div className={styles.wrapper_quantity}>
            <Text bold font={'montserrat'} size={'xl'} text={`${sum}+`} />
            <Text
              className={styles.description}
              size={'s'}
              text={width > breakpoint.tp ? 'техник для достижения целей' : 'техники'}
            />
          </div>

          <div className={styles.wrapper_percent}>
            <Text bold font={'montserrat'} size={'xl'} text={`${courseGBP}%`} />
            <Text
              className={styles.description}
              size={'s'}
              text={width > breakpoint.tp ? 'увеличение личной продуктивности' : 'продуктивности'}
            />
          </div>
        </div>
      </div>
      <div className={styles.mentor}>
        <img alt="mentor img" src={mentor} />
      </div>
    </div>
  );
};

export default MainPage;
