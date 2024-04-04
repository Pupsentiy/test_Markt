import { memo } from 'react';

import './Loader.scss';
export const Loader = memo(() => {
  return (
    <div className={'lds-spinner'}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});
