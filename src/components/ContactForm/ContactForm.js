import classNames from 'classnames';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { BsTextCenter } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Button } from '../Button';
import './contactform.scss';

const ContactForm = ({ theme }) => {
  const serviceKey = process.env.REACT_APP_SERVICE_ID;
  const templateKey = process.env.REACT_APP_TEMPLATE_KEY;
  const userKey = process.env.REACT_APP_USER_KEY;
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceKey, templateKey, form.current, userKey)
      .then((result) => {
        console.log(result.text);
        setShowAlert(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.section
    initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1, transition: { type: 'easeIn', duration: 0.5 } }}
    viewport={{ once: true }}
    className='form-margin' id='contact'>
      <div className={classNames('container d-flex flex-column', {
        'bg-form-light': theme === 'light',
        'bg-form-dark': theme === 'dark',
      })}>
        <h2 className='my-3'>Contact Me!</h2>
        <form ref={form} onSubmit={sendEmail} className='form row text-center'>
          <div className="form-floating mb-4 col-sm-12 col-md-6 col-lg-6">
            <input type="text" className="form-control" id="floatingInput" name="user_name" placeholder="Name..." required />
            <label htmlFor="floatingInput"><FaUser /> Name</label>
          </div>
          <div className="form-floating mb-4 col-sm-12 col-md-6 col-lg-6">
            <input type="email" className="form-control" id="floatingEmail" name="user_email" placeholder="Email" required />
            <label htmlFor="floatingPassword"><AiOutlineMail /> Email </label>
          </div>
          <div className="form-floating col-12">
            <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            <label htmlFor="floatingPassword"><BsTextCenter /> Message... </label>
          <Button className='mb-4' type="submit" value="Send" text='Submit' />
          {showAlert
            ? (<div className="alert alert-success" role="alert"> Your message has been sent successfully!
              <button onClick={() => setShowAlert(false)} className='btn text-success mb-1'><AiOutlineClose /></button>
            </div>
            ) : null }
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
