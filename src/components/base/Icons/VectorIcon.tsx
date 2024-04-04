import ReactComponent from '@/assets/svg/vector.svg?react';
import { type FC, type HTMLAttributes } from 'react';

const VectorIcon: FC<HTMLAttributes<SVGSVGElement>> = props => {
  return <ReactComponent {...props} />;
};

export default VectorIcon;
