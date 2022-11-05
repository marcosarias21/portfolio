import Container from '../Container/Container';
import WhoIm from '../WhoIm/WhoIm';
import picture from '../../assets/images/me.jpg';
import './about.scss';

const About = () => {
  return (
      <div className='bg-color-light'>
        <Container>
          <div className='container row align-items-center justify-content-center'>
            <WhoIm />
            <div className='text-center'>
              <img className='img-size' src={picture} />
            </div>
          </div>
        </Container>
      </div>
  );
};

export default About;
