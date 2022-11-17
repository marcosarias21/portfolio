import {
  BsStars, BsFillHouseDoorFill, BsCast, BsChat,
} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { Switch } from '../Switch';
import './navbar.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="d-flex flex-column justify-content-between">
        <div>
          <h1 className='fw-bold'>hola</h1>
        </div>
        <div className='nav-item'>
          <a className="nav-link" aria-current="page" href="#"><BsFillHouseDoorFill className='mb-1' />Home</a>
          <a className="nav-link" href="#"><FaGithub />About</a>
          <a className="nav-link" href="#"><BsStars className='mb-1' />Skills</a>
          <a className="nav-link"><BsCast className='mb-1' />Projects</a>
          <a className="nav-link"><BsChat className='mb-1' />Contact</a>
        </div>
        <div>
          <Switch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
