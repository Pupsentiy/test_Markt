import { Input } from '@/components/Input';
import { Button, Modal, Text } from '@/components/base';
import { Checkbox } from '@/components/base/Checkbox';
import { CloseIcon, VectorIcon } from '@/components/base/Icons';
import { cls } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, memo, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './CellModal.module.scss';

interface CellModalProps {
  className?: string;
  onCloseModal: () => void;
  onShowModal: () => void;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  showSuccess: boolean;
}

const CallbackFormSchema = yup.object().shape({
  check: yup.boolean(),
  name: yup.string().min(1).required(),
  phone: yup.string().min(11).required(),
});

interface CallbackForm {
  check?: boolean;
  name: string;
  phone: string;
}

export const CellModal = memo(
  ({ className, onCloseModal, setShowSuccess, showModal, showSuccess }: CellModalProps) => {
    const { control, handleSubmit, register, reset, setError } = useForm({
      defaultValues: {
        check: false,
        name: '',
        phone: '',
      },
      mode: 'onBlur',
      resolver: yupResolver(CallbackFormSchema),
    });

    const onSubmit: SubmitHandler<CallbackForm> = useCallback(
      (data: CallbackForm) => {
        if (!data.check) {
          setError('phone', { message: 'поставтье галочку' });
        } else {
          localStorage.setItem('data', JSON.stringify({ name: data.name, phone: data.phone }));
          setShowSuccess(true);
          reset();
        }
      },
      [setError, setShowSuccess],
    );

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
        {!showSuccess ? (
          <>
            <Text bold className={styles.title} size={'xl'} title={'Закажите обратный звонок'} />
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="name"
                render={({ field, formState: { errors } }) => (
                  <Input
                    color={'primary'}
                    placeholder={'Имя'}
                    {...field}
                    error={errors.name?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field, formState: { errors } }) => (
                  <Input
                    className={styles.input_num}
                    color={'primary'}
                    error={errors.phone?.message}
                    placeholder={'Телефон'}
                    type={'number'}
                    {...field}
                  />
                )}
              />
              <div className={styles.wrapper_checkbox}>
                <Checkbox
                  {...register('check')}
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
                addonRight={<VectorIcon className={styles.vector} />}
                className={styles.submit}
                color={'transparent'}
                type={'submit'}
              >
                <Text bold text={'Заказать обратный звонок'} />
              </Button>
            </form>
          </>
        ) : (
          <div className={styles.wrapper_success}>
            <Text align={'center'} size={'xxl'} text={'Спасибо\n' + 'за заявку'} />
            <Text
              align={'center'}
              size={'xl'}
              text={'Я обязательно\n' + ' свяжусь с вами\n' + ' в ближайшее время.'}
            />
          </div>
        )}
      </Modal>
    );
  },
);
