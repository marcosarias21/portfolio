/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { useThemeContext } from '../../provider/ThemeContext';
import { Container } from '../Container';
import { ContainerMeImg } from '../ContainerMeImg';
import { Layout } from '../Layout';
import './about.scss';

const About = () => {
  const theme = useThemeContext();
  return (
    <Container className={classNames('mb-5 bg-about', {
      'bg-about-dark': theme === 'dark',
      'bg-about': theme === 'light',
    })}>
      <Layout>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
          viewport={{ once: true }}>
            Who I'm?
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } }}
          viewport={{ once: true }}
          className='text-style my-5'>
            Web developer apassionate who enjoys being challenged and participating in projects
            that require me to work outside of my comfort zone to grow more and more each day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }}
            viewport={{ once: true }}>
            <a href="https://github.com/marcosarias21" className='btn'> <AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/marcos-ar/" className='btn text-primary'> <FaLinkedinIn /></a>
            <button className={theme === 'light' ? 'btn btn-outline-secondary' : 'btn btn-outline-light'} > Download resume <AiOutlineDownload className='svg-size' /> </button>
          </motion.div>
        </div>
        <ContainerMeImg />
      </Layout>
    </Container>
  );
};

export default About;
