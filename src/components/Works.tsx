import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { ITags } from '../interfaces';

type ProjectCardProps = {
  name: string;
  description: string;
  tags: ITags[];
  image: string;
  source_code_link: string;
  index: number;
};

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: 'up',
        type: 'spring',
        delay: index * 0.5,
        duration: 0.75,
      })}
    >
      <Tilt className="tilt-cart">
        <div className="tilt-cart__main">
          <img src={image} alt="project_image" />

          <div className="main__icon card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="icon-content"
            >
              <img src={github} alt="source code" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {' '}
      <motion.div variants={textVariant({ delay: 0.5 })}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="works">
        <motion.p
          variants={fadeIn({
            direction: '',
            type: '',
            delay: 0.1,
            duration: 1,
          })}
        >
          {' '}
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: Works, idName: '' });
