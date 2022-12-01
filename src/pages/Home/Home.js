import { useContext } from 'react';
import { About } from '../../components/About';
import { ContactForm } from '../../components/ContactForm';
import { MenuBurger } from '../../components/MenuBurger';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import { projects } from '../../helper/projects';
import burgerContext from '../../provider/BurgerMenuContext';
import { useThemeContext } from '../../provider/ThemeContext';
import './home.scss';
import { Footer } from '../../components/Footer';
import { OuterWrapper } from '../../components/OuterWrapper';
import { InnerWrapper } from '../../components/InnerWrapper';

const Home = () => {
  const theme = useThemeContext();
  const { showMenu } = useContext(burgerContext);

  return (
    <section className={theme === 'light' ? 'container-scroll' : 'container-scroll-dark'}>
      <Navbar showMenu={showMenu} />
      <MenuBurger showMenu={showMenu} />
      <OuterWrapper>
        <InnerWrapper>
          <Hero />
          <About />
          <Skills />
          <section>
            <div className='scroll-project' id='project'>
              <div className='d-flex flex-column'>
                <h2 className='color-title mb-5'>Projects</h2>
                {projects.map(project => <Projects key={project.id} {...project} />)}
              </div>
            </div>
          </section>
          <ContactForm />
        </InnerWrapper>
        <Footer />
      </OuterWrapper>
    </section>
  );
};

export default Home;
