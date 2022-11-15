import classNames from 'classnames';
import { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiOutlineDatabase } from 'react-icons/ai';
import { FaGithub, FaPager } from 'react-icons/fa';
import './project.scss';

const Projects = ({
  title, description, githubBackend, github, demo, image, imageTwo, status,
}) => {
  const [isEnter, setIsEnter] = useState(true);
  const [opacity, setOpacity] = useState(false);
  console.log(opacity);

  return (
    <div className={classNames({
      'container-blur active': opacity === true,
      'container-blur': opacity === false,
    })} onMouseEnter={() => setOpacity(true)} onMouseLeave={() => setOpacity(false)}>
      <div className='row justify-content-center mb-4 mt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6 ps-4'>
          <h2>{title}</h2>
          <p> {description} </p>
          <p className='fw-bold'>Status:{status === 'Completed' ? <span className='text-success'> <AiOutlineCheck/> Completed </span> : <span className='text-danger'> <AiOutlineClose /> In progress... </span>}

          </p>
          <div>
            <a target='blank' href={github}><FaGithub className='svg-size' /></a>
            {githubBackend ? <a target='blank' href={githubBackend} className='btn'> <AiOutlineDatabase /> </a> : null }
            <a target='blank' href={demo}><FaPager className='svg-size text-danger' /></a>
          </div>
        </div>
        <div className='d-none d-sm-block d-sm-none d-md-block col-md-6 col-lg-6'>
          <a target='blank' href={demo}>
          <img className='img-project-size' onMouseEnter={() => setIsEnter(false)} onMouseLeave={() => setIsEnter(true)} src={isEnter ? image : imageTwo} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
