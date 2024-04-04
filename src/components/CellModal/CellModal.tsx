import { Input } from '@/components/Input';
import { Button, Modal, Text } from '@/components/base';
import { Checkbox } from '@/components/base/Checkbox';
import { CloseIcon, VectorIcon } from '@/components/base/Icons';
import { cls } from '@/utils/helpers';
import { memo } from 'react';

import styles from './CellModal.module.scss';

interface CellModalProps {
  className?: string;
  onCloseModal: () => void;
  onShowModal: () => void;
  showModal: boolean;
}

export const CellModal = memo(({ className, onCloseModal, showModal }: CellModalProps) => {
  return (
    <Modal
      className={cls([styles.CellModal, className])}
      isOpen={showModal}
      lazy
      left={0}
      onClose={onCloseModal}
      top={0}
    >
      <div className={styles.wrapper_close}>
        <Button className={styles.close} onClick={onCloseModal}>
          <CloseIcon />
        </Button>
      </div>
      <Text bold className={styles.title} size={'xl'} title={'Закажите обратный звонок'} />
      <form className={styles.form}>
        <Input color={'primary'} placeholder={'Имя'} />
        <Input
          className={styles.input_num}
          color={'primary'}
          placeholder={'Телефон'}
          type={'number'}
        />

        <div className={styles.wrapper_checkbox}>
          <Checkbox
            label={
              <Text
                className={styles.check_label}
                font={'montserrat'}
                size={'s'}
                text={'Согласен на сохранение и обработку персональных данных'}
              />
            }
            type={'checkbox'}
          />
        </div>
        <Button
          addonRight={<VectorIcon />}
          className={styles.submit}
          color={'transparent'}
          type={'submit'}
        >
          <Text bold text={'Заказать обратный звонок'} />
        </Button>
      </form>
    </Modal>
  );
});
