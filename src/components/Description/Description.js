/* eslint-disable react/no-unescaped-entities */
import Typewriter from 'typewriter-effect';
import './description.scss';

const Description = () => {
  return (
    <div className="col-sm-6 col-md-6 desc-content">
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
  );
};

export default Description;
