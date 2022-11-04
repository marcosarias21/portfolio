import Container from '../../components/Container/Container';
import WhoIm from '../../components/WhoIm/WhoIm';
import Skills from '../../components/Skills/Skills';
import picture from '../../assets/images/me.jpg';
import Images from '../../components/Images/Images';
import './about.scss';

const About = () => {
  return (
      <section className='bg-color-light'>
        <Container>
          <div className='container row align-items-center justify-content-center'>
            <WhoIm />
            <div className='text-center'>
              <img className='img-size' src={picture} />
            </div>
          </div>
        </Container>
      </section>
  );
};

export default About;
