import { cls } from '@/utils/helpers';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { Portal } from '../Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  bottom?: number;
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  lazy?: boolean;
  left?: number;
  onClose?: () => void;
  right?: number;
  top?: number;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
  const { bottom, children, className, isOpen, lazy, left, onClose, right, top } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearTimeout(timeRef.current as NodeJS.Timeout);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <section
        className={cls([styles.Modal], {
          [styles.isClosing]: Boolean(isClosing),
          [styles.opened]: Boolean(isOpen),
        })}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div
            className={cls([styles.content, className])}
            onClick={onContentClick}
            style={{ bottom: bottom, left: left, right: right, top: top }}
          >
            {children}
          </div>
        </div>
      </section>
    </Portal>
  );
};
