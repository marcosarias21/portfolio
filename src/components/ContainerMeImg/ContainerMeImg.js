import { motion } from 'framer-motion';
import picture from '../../assets/images/me.jpg';
import './containermeimg.scss';

const ContainerMeImg = () => {
  return (
    <motion.div
      className='text-center col-sm-6 col-md-6 col-lg-6'
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8 } }}
      viewport={{ once: true }}>
      <img className='img-size' src={picture} />
    </motion.div>
  );
};

export default ContainerMeImg;
