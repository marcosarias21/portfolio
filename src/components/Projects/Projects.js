import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FaGithub, FaPager } from 'react-icons/fa';
import './project.scss';
import classNames from 'classnames';
import { useThemeContext } from '../../provider/ThemeContext';

const Projects = ({
  title, description, githubBackend, github, demo, image, status,
}) => {
  const theme = useThemeContext();

  return (
    <motion.div whileHover={{ scale: 1.02, boxShadow: '11px 11px 4px 1px' }} className={classNames('card', {
      'bg-transparent text-white border-light': theme !== 'light',
    })}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description.substring(0, 100).concat('...')}</p>
        <div className='d-flex gap-2'>
          <div>
            <a href={github} className="btn btn-inherit"><FaGithub /></a>
            {demo.length > 0 && <a href={demo} target='blank' className="btn btn-inherit"><FaPager /></a>}
            {githubBackend && <a href={githubBackend} className="btn btn-inherit"><AiOutlineDatabase /></a>}
          </div>
          <div className='mt-2'>
            <p>State: {status}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
