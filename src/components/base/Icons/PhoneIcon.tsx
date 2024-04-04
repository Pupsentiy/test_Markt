import ReactComponent from '@/assets/svg/tel.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const PhoneIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default PhoneIcon;
