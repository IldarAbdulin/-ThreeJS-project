import { staggerContainerProps } from '../../types/staggerContainer';

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: staggerContainerProps) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
