import Container from '../../components/Container/Container';
import WhoIm from '../../components/WhoIm/WhoIm';
import Skills from '../../components/Skills/Skills';
import './about.scss';

const About = () => {
  return (
      <section className='bg-color-light'>
        <Container>
          <div className='container row align-items-center justify-content-center'>
            <WhoIm />
            <hr className='mt-5'/>
            <Skills />
          </div>
        </Container>
      </section>
  );
};

export default About;
