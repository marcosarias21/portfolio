import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FaGithub, FaPager } from 'react-icons/fa';
import './project.scss';

const Projects = ({
  title, description, githubBackend, github, demo, image, imageTwo, status, id,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 1,
      },
    },
  };
  const [isEnter, setIsEnter] = useState(true);
  return (
    <div className='row justify-content-center mb-5 p-3 border-section'>
        <motion.div
        key={id}
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='col-sm-12 col-md-6 col-lg-6'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className='fw-bold'>Status:{status === 'Completed' ? <span className='text-success'> Completed </span> : <span className='text-danger'> In progress... </span>}
          </p>
          <div>
            <a target='blank' href={github}><FaGithub className='svg-size' /></a>
            {githubBackend ? <a target='blank' href={githubBackend}> <AiOutlineDatabase className='svg-size' /></a> : null }
            <a target='blank' href={demo}><FaPager className='ms-2 svg-size text-danger' /></a>
          </div>
        </motion.div>
        <motion.div variants={variants} initial='hidden' whileInView='visible' viewport={{ once: true }} className='d-none d-sm-block d-sm-none d-md-block col-md-6 col-lg-6'>
          <a target='blank' href={demo}>
          <img className='img-project-size' onMouseEnter={() => setIsEnter(false)} onMouseLeave={() => setIsEnter(true)} src={isEnter ? image : imageTwo} />
          </a>
        </motion.div>
      </div>
  );
};

export default Projects;
