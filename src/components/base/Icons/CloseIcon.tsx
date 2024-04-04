import ReactComponent from '@/assets/svg/close.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const CloseIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default CloseIcon;
