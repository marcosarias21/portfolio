/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Container } from '../Container';
import { Layout } from '../Layout';
import { Images } from '../Images';
import imgLight from '../../assets/images/imgLight.gif';
import './hero.scss';

const Hero = () => {
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
              className='btn btn-primary py-3 px-4 mt-4'>
              Contact Me ➡
            </motion.button>
          </div>
          <Images className='img-media-size' photo={imgLight}/>
      </Layout>
    </Container>
  );
};

export default Hero;
