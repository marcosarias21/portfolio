import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { BsFileEarmarkArrowDown, BsTextCenter } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Button } from '../Button';
import './contactform.scss';

const ContactForm = () => {
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
      <section className='container mt-5 pt-5 d-flex align-items-center justify-content-center'>
        <form ref={form} onSubmit={sendEmail} className='form col-12 col-md-8 col-lg-7 text-center'>
          <h2 className='text-center py-3 text-primary'>Contact Me!</h2>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" name="user_name" placeholder="Name..." required />
            <label htmlFor="floatingInput"><FaUser /> Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingEmail" name="user_email" placeholder="Email" required />
            <label htmlFor="floatingPassword"><AiOutlineMail /> Email </label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            <label htmlFor="floatingPassword"><BsTextCenter /> Message... </label>
          </div>
          <Button type="submit" value="Send" text='Submit' />
          {showAlert
            ? (<div className="alert alert-success" role="alert"> Your message has been sent successfully!
              <button onClick={() => setShowAlert(false)} className='btn text-success mb-1'><AiOutlineClose /> </button>
            </div>
            ) : ('')}
        </form>
      </section>

  );
};

export default ContactForm;
