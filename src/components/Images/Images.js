import { motion } from 'framer-motion';

const Images = ({ photo, className }) => {
  return (
    <div className="d-none d-sm-block
    d-sm-none d-md-block col-md-5 col-lg-5">
      <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      className={className} src={photo} />
    </div>
  );
};

export default Images;
