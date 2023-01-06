import classNames from 'classnames';
import {
  BsStars, BsFillHouseDoorFill, BsCast, BsChat,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Switch } from '../Switch';
import './navbar.scss';

const Navbar = ({ showMenu }) => {
  return (
    <header className={showMenu === true && 'd-block'}>
      <nav className={classNames('d-flex flex-column justify-content-between', {
        'menu-show': showMenu === true,
        'menu-hidden': showMenu === false,
      })}>
        <div className='d-flex justify-content-center logo-container py-3'>
          <h2>M.A</h2>
          <h2 className='lastName-hidden'>rias</h2>
        </div>
        <div className='nav-item d-flex flex-column'>
          <a className="nav-link" aria-current="page" href="#"><BsFillHouseDoorFill className='mb-1' /><span>Home</span></a>
          <a className="nav-link" href="#"><FaGithub /><span>About</span></a>
          <a className="nav-link" href="#"><BsStars className='mb-1' /><span>Skills</span></a>
          <a className="nav-link"><BsCast className='mb-1' /><span>Projects</span></a>
          <a className="nav-link"><BsChat className='mb-1' /><span>Contact</span></a>
        </div>
        <div className='d-flex justify-content-center'>
          <Switch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
