import Navbar from '../../components/Navbar/Navbar';
import { About } from '../../components/About';
import Skills from '../../components/Skills/Skills';
import { Hero } from '../../components/Hero';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    </>
  );
};

export default Home;
