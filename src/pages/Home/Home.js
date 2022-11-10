import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import { projects } from '../../helper/projects';
import './home.scss';

const Home = () => {
  return (
    <>
    <Navbar />
    <section className='container-scroll'>
      <Hero />
      <About />
      <Skills />
      <section className='container' id='project'>
        {projects.map(project => <Projects key={project} {...project} />)}
      </section>
    </section>
    </>
  );
};

export default Home;
