import React from 'react';
import Container from '../Container/Container';
import Description from '../Description/Description';
import imgLight from '../../assets/images/imgLight.gif';
import Images from '../Images/Images';

const Introduction = () => {
  return (
    <Container>
    <div className='row align-items-center justify-content-center'>
      <Description />
      <Images photo={imgLight}/>
    </div>
  </Container>
  );
};

export default Introduction;
