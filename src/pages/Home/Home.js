import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
import { Footer } from '../../components/Footer';
import { OuterWrapper } from '../../components/OuterWrapper';
import { InnerWrapper } from '../../components/InnerWrapper';
import { FilterProject } from '../../components/FilterProject';
import './home.scss';
import projectContext from '../../provider/FilterProjectContext';

const Home = () => {
  const theme = useThemeContext();
  const { typeProject } = useContext(projectContext);
  const [projectsState, setProjectsState] = useState([]);
  const { showMenu } = useContext(burgerContext);

  useEffect(() => {
    const projectsFiltered = projects.filter(project => project.type === typeProject);
    setProjectsState(projectsFiltered);
  }, [typeProject]);

  return (
    <section className={theme === 'light' ? 'container-scroll' : 'container-scroll-dark'}>
      <Navbar showMenu={showMenu} />
      <MenuBurger showMenu={showMenu} />
      <OuterWrapper>
        <InnerWrapper>
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <section>
            <div className={theme === 'light' ? 'scroll-project' : 'scroll-project-dark' } id='project'>
              <div id='projects' className='d-flex flex-column'>
                <h2 className='mb-5'>Projects</h2>
                <FilterProject />
                <div className='row gap-5 justify-content-center'>
                  {projectsState.map(project => <motion.div key={project.id} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ duration: 0.5 }} initial="hidden" animate="visible" className='mt-5 col-4'>
                      <Projects key={project.id} {...project} />
                    </motion.div>)}
                </div>
              </div>
            </div>
          </section>
          <ContactForm theme={theme}/>
        </InnerWrapper>
        <Footer theme={theme} />
      </OuterWrapper>
    </section>
  );
};

export default Home;
