/* eslint-disable react/no-unescaped-entities */
import Typewriter from 'typewriter-effect';
import Container from '../Container/Container';
import Images from '../Images/Images';
import Layout from '../Layout/Layout';
import imgLight from '../../assets/images/imgLight.gif';
import './header.scss';

const Header = () => {
  return (
    <Container>
        <Layout>
          <div className="col-sm-12 col-md-12 col-lg-6 desc-content">
            <h1>Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
            <h2 className='my-4'> I'm <span className='text-primary'>Marcos Arias</span> from Argentina.</h2>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Stack Developer', 'Front End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
            <button className='btn btn-primary py-3 px-4 mt-4'> Contact Me ➡</button>
          </div>
          <Images photo={imgLight}/>
      </Layout>
    </Container>
  );
};

export default Header;
