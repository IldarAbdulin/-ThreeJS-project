import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: '',
        type: 'spring',
        delay: index * 0.5,
        duration: 0.75,
      })}
      className="feedbacks-card"
    >
      <p className="text-white font-black text-[48px] ">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="feedbacks-card__content">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback-by-${name}`} />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="feedbacks">
      <div className={`${styles.padding} feedbacks__main`}>
        <motion.div variants={textVariant({ delay: 0.5 })}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} feedbacks__content`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper({ Component: Feedbacks, idName: '' });
