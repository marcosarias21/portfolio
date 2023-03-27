/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BackgroundVideo } from '../../components/BackgroundVideo';
import './initialpage.scss';

const InitialPage = () => {
  return (
    <motion.section className='initial-section container d-flex flex-column align-items-center justify-content-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className='text-content my-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }}
       transition={{ delay: 0.5, duration: 1 }} >
        <h1>Hello, I'm <span className='text-danger'> Marcos Arias </span></h1>
        <h1> Welcome to my portfolio</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
       transition={{ delay: 1, duration: 1 }} className='arrow-container'>
          <motion.h1 className='h-pointer' initial={{ y: -10 }} animate={{
            opacity: 1,
            y: 10,
            transition: {
              duration: 1, ease: 'easeIn', repeat: Infinity, repeatType: 'reverse',
            },
          }} >
          <Link className='link-style' to='/home'>
            &#8659;
          </Link>
          </motion.h1>
      </motion.div>
      <BackgroundVideo />
    </motion.section>
  );
};

export default InitialPage;
