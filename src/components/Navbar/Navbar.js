import classNames from 'classnames';
import { useState } from 'react';
import {
  BsStars, BsFillHouseDoorFill, BsCast, BsChat,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Switch } from '../Switch';
import './navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className='d-flex flex-column justify-content-between menu-hidden'>
        <div>
          <h1 className='fw-bold'>hola</h1>
        </div>
        <div className='nav-item d-flex flex-column'>
          <a className="nav-link" aria-current="page" href="#"><BsFillHouseDoorFill className='mb-1' /><span>Home</span></a>
          <a className="nav-link" href="#"><FaGithub /><span>About</span></a>
          <a className="nav-link" href="#"><BsStars className='mb-1' /><span>Skills</span></a>
          <a className="nav-link"><BsCast className='mb-1' /><span>Projects</span></a>
          <a className="nav-link"><BsChat className='mb-1' /><span>Contact</span></a>
        </div>
        <div>
          <Switch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
