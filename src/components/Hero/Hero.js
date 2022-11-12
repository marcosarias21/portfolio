/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Container } from '../Container';
import { Layout } from '../Layout';
import { Images } from '../Images';
import imgLight from '../../assets/images/imgLight.gif';
import imgDark from '../../assets/images/imageDark.gif';
import './hero.scss';
import { useThemeContext } from '../../provider/ThemeContext';

const Hero = () => {
  const theme = useThemeContext();
  return (
    <Container>
        <Layout>
          <div className="col-sm-12 col-md-6 col-lg-6 desc-content">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className='my-4'>
              I'm <span className='text-primary'>Marcos Arias</span> from  Argentina.
            </motion.h2>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Stack Developer', 'Front End Developer'],
                autoStart: true,
                loop: true,
              }}
            />
            <motion.button
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className='button-animated mt-4 py-3 px-4'>
              <div className="svg-wrapper-1" >
                <div className="svg-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                  </svg>
                </div>
              </div>
              <span className='fw-bold'>Contact Me</span>
            </motion.button>
          </div>
          <Images className='img-media-size' photo={ theme === 'light' ? imgLight : imgDark }/>
      </Layout>
    </Container>
  );
};

export default Hero;
