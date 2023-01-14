import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import burgerContext from '../../provider/BurgerMenuContext';
import './menuburger.scss';

const MenuBurger = ({ showMenu }) => {
  const { setShowMenu } = useContext(burgerContext);
  return (
    <div className="burger-position">
      <div className='burger-fixed'>
        <button onClick={() => setShowMenu(!showMenu)} className="btn"> <GiHamburgerMenu /> </button>
      </div>
    </div>
  );
};

export default MenuBurger;
