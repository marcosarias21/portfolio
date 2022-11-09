import { useState } from 'react';
import { FaGithub, FaPager } from 'react-icons/fa';
import { projects } from '../../helper/projects';
import './project.scss';

const Projects = () => {
  const [isEnter, setIsEnter] = useState(true);
  return (
    <section className='container' id='project'>
      <div className='row justify-content-center'>
          {projects.map(project => (
          <>
            <div className='col-6 mt-5 pt-5' key={project.id}>
              <h2>{project.title}</h2>
              <p> {project.description} </p>
              <p> Status: {project.status} </p>
              <div>
                <a target='blank' href={project.github} className='btn'> <FaGithub /> </a>
                {project.githubBackend ? <a target='blank' href={project.githubBackend} className='btn'> Backend </a> : null }
                <a target='blank' href={project.demo} className='btn'> <FaPager /> </a>
              </div>
            </div>
            <div className='col-6 mt-5 pt-5'>
              <a target='blank' href={project.demo}>
              <img className='img-project-size' onMouseEnter={() => setIsEnter(false)} onMouseLeave={() => setIsEnter(true)} src={isEnter ? project.image : project.imageTwo} />
              </a>
            </div>
          </>))}
      </div>
    </section>
  );
};

export default Projects;
