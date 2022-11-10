import { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaPager } from 'react-icons/fa';
import './project.scss';

const Projects = ({
  title, description, githubBackend, github, demo, image, imageTwo, status,
}) => {
  const [isEnter, setIsEnter] = useState(true);
  return (
      <div className='row justify-content-center'>
        <div className='col-6 mt-5 pt-5'>
          <h2>{title}</h2>
          <p> {description} </p>
          {status === 'Completed' ? <p className='text-success'> <AiOutlineCheck/> Completed </p> : <p className='text-danger'> <AiOutlineClose /> In progress... </p>}
          <div>
            <a target='blank' href={github} className='btn'> <FaGithub /> </a>
            {githubBackend ? <a target='blank' href={githubBackend} className='btn'> Backend </a> : null }
            <a target='blank' href={demo} className='btn'> <FaPager /> </a>
          </div>
        </div>
        <div className='col-6 mt-5 pt-5'>
          <a target='blank' href={demo}>
          <img className='img-project-size' onMouseEnter={() => setIsEnter(false)} onMouseLeave={() => setIsEnter(true)} src={isEnter ? image : imageTwo} />
          </a>
        </div>
      </div>
  );
};

export default Projects;
