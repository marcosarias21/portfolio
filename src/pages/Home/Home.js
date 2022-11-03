/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo';
import './home.scss';

const Home = () => {
  return (
    <section className='container d-flex flex-column align-items-center justify-content-center'>
      <motion.div className='text-content my-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
       transition={{ delay: 0.5, duration: 1 }} >
        <h1>Hello, I'm <span className='text-danger'> Marcos Arias </span></h1>
        <h1>I'm full-stack web developer. </h1>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
       transition={{ delay: 1, duration: 1 }} className='arrow-container'>
          <motion.h1 className='h-pointer' initial={{ y: -10 }} animate={{
            opacity: 1,
            y: 10,
            transition: {
              duration: 1, ease: 'easeIn', repeat: Infinity, repeatType: 'reverse',
            },
          }} > &#8659; </motion.h1>
      </motion.div>
      <BackgroundVideo />
    </section>
  );
};

export default Home;
