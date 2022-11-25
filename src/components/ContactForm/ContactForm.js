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
    <section className='form-margin'>
      <div className='container bg-form-style d-flex flex-column p-4'>
        <h2 className='my-5'>Contact Me!</h2>
        <form ref={form} onSubmit={sendEmail} className='form row text-center'>
          <div className="form-floating mb-4 col-6">
            <input type="text" className="form-control" id="floatingInput" name="user_name" placeholder="Name..." required />
            <label htmlFor="floatingInput"><FaUser /> Name</label>
          </div>
          <div className="form-floating col-6">
            <input type="email" className="form-control" id="floatingEmail" name="user_email" placeholder="Email" required />
            <label htmlFor="floatingPassword"><AiOutlineMail /> Email </label>
          </div>
          <div className="form-floating col-12">
            <textarea className="form-control" name="message" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
            <label htmlFor="floatingPassword"><BsTextCenter /> Message... </label>
          <Button className='mb-4' type="submit" value="Send" text='Submit' />
          {showAlert
            ? (<div className="alert alert-success" role="alert"> Your message has been sent successfully!
              <button onClick={() => setShowAlert(false)} className='btn text-success mb-1'><AiOutlineClose /> </button>
            </div>
            ) : null }
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
