import ReactComponent from '@/assets/svg/logoicon.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const LogoIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default LogoIcon;
