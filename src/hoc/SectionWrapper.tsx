import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/stagger-container';

type Props = {
  Component: any;
  idName: string;
};

export const SectionWrapper = ({ Component, idName }: Props) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer({ staggerChildren: 5, delayChildren: 10 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
