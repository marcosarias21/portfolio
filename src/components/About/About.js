/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Container from '../Container/Container';
import ContainerMeImg from '../ContainerMeImg/ContainerMeImg';
import Layout from '../Layout/Layout';
import './about.scss';

const About = () => {
  return (
    <Container>
      <Layout>
        <div className='col-sm-12 col-md-12 col-lg-7 text-center'>
          <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
          viewport={{ once: true }}
          className='fw-bold'>
          Who <span className='text-my-color'> I'm?</span>
          </motion.h2>
          {/* Primero muestra el y who i am en animacion y dsp´un delay para mostrar lo otro */}
          <motion.p
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } }}
          viewport={{ once: true }}
          className='text-style my-5'>
            Web developer apassionate who enjoys being challenged and participating in projects
            that require me to work outside of my comfort zone to grow more and more each day
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.8 } }}
            viewport={{ once: true }}>
            <a href="https://github.com/marcosarias21" className='btn'> <AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/marcos-ar/" className='btn text-primary'> <FaLinkedinIn /></a>
            <button className='btn btn-outline-primary '> Download CV </button>
          </motion.div>
        </div>
        <ContainerMeImg />
      </Layout>
    </Container>
  );
};

export default About;
