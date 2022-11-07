import './navbar.scss';
import {
  BsStars, BsFillHouseDoorFill, BsCast, BsChat,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className='navbar-nav'>
            <div className='nav-item'>
              <a className="nav-link" aria-current="page" href="#">
              <BsFillHouseDoorFill className='mb-1' />
                Home
              </a>
            </div>
            <div className='nav-item'>
              <a className="nav-link" href="#">
              <FaGithub />
                  About
              </a>
            </div>
            <div className='nav-item'>
              <a className="nav-link" href="#">
              <BsStars className='mb-1' />
                Skills</a>
            </div>
            <div className='nav-item'>
              <a className="nav-link">
             <BsCast className='mb-1' />
                Projects
              </a>
            </div>
            <div className='nav-item'>
              <a className="nav-link">
                <BsChat className='mb-1' />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
