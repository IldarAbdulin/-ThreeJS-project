import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="hero">
      <div className={`${styles.paddingX} hero__main`}>
        <div className="main__content">
          <div className="content__purple-ball" />
          <div className="content__purple-line" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ildar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />{' '}
            interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="hero__scroll">
        <a href="#about">
          <div className="scroll__main">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="main__motion"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
