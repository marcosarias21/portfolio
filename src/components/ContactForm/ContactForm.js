import React from 'react';
import { AiFillFileText, AiOutlineMail } from 'react-icons/ai';
import { BsCart, BsTextCenter } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Container } from '../Container';
import { Layout } from '../Layout';
import './contactform.scss';

const ContactForm = () => {
  return (
      <section className='container mt-5 pt-5 d-flex align-items-center justify-content-center'>
        <form className='form col-6 text-center'>
          <h2 className='text-center py-3 text-primary'>Contact Me!</h2>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Name..." />
            <label htmlFor="floatingInput"><FaUser /> Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword"><AiOutlineMail /> Email </label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
            <label htmlFor="floatingPassword"><BsTextCenter /> Message... </label>
          </div>
          <button className='btn btn-primary my-3'> Submit </button>
        </form>
      </section>

  );
};

export default ContactForm;
