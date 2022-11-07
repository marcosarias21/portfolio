/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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
          <h2 className='fw-bold'> Who <span className='text-my-color'> I'm?</span></h2>
          {/* Primero muestra el y who i am en animacion y dsp´un delay para mostrar lo otro */}
          <p className='text-style my-5'>Web developer apassionate who enjoys being challenged and participating in projects
            that require me to work outside of my comfort zone to grow more and more each day </p>
          <div>
            <a href="https://github.com/marcosarias21" className='btn'> <AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/marcos-ar/" className='btn text-primary'> <FaLinkedinIn /></a>
            <button className='btn btn-outline-primary '> Download CV </button>
          </div>
        </div>
        <ContainerMeImg />
      </Layout>
    </Container>
  );
};

export default About;
