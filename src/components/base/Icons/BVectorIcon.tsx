import ReactComponent from '@/assets/svg/boldVector.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const BVectorIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default BVectorIcon;
