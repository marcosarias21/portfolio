import { About } from '../../components/About';
import { ContactForm } from '../../components/ContactForm';
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
    <section className={theme === 'light' ? 'container-scroll' : 'container-scroll-dark'}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <section className='container' id='project'>
        <h2 className='text-center color-pers'>Projects</h2>
        {projects.map(project => <Projects key={project.id} {...project} />)}
      </section>
      <ContactForm />
    </section>
  );
};

export default Home;
