import { motion } from 'framer-motion';
import './button.scss';

const Button = ({
  text, type, value, className,
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className={`button-animated mt-4 py-3 px-4 ${className}`}
      type={type}
      value={value}
      >
      <div className="svg-wrapper-1" >
        <div className="svg-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
          </svg>
        </div>
      </div>
      <span className='fw-bold'>{text}</span>
    </motion.button>
  );
};

export default Button;
