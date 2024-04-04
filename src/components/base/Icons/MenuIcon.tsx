import ReactComponent from '@/assets/svg/menu.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const MenuIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default MenuIcon;
