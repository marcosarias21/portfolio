import { About } from '../../components/About';
import { Hero } from '../../components/Hero';
import { Navbar } from '../../components/Navbar';
import { Projects } from '../../components/Projects';
import { Skills } from '../../components/Skills';
import './home.scss';

const Home = () => {
  return (
    <>
    <Navbar />
    <section className='container-scroll'>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </section>
    </>
  );
};

export default Home;
