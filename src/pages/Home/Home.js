import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import { projects } from '../../helper/projects';
import { useThemeContext } from '../../provider/ThemeContext';
import './home.scss';

const Home = () => {
  const theme = useThemeContext();
  return (
    <>
    <Navbar />
    <section className={theme === 'light' ? 'container-scroll' : 'container-scroll-dark'}>
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
