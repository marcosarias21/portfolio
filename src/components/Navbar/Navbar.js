import classNames from 'classnames';
import { NavLinks } from '../../helper/navlinks';
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
          {NavLinks.map((item, i) => <a key={i} href={item.path} className='nav-link'>{item.icon}<span>{item.title}</span></a>)}
        </div>
        <div className='d-flex justify-content-center'>
          <Switch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
