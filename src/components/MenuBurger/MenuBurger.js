import { useContext } from 'react';
import burgerContext from '../../provider/BurgerMenuContext';
import './menuburger.scss';

const MenuBurger = ({ showMenu }) => {
  const { setShowMenu } = useContext(burgerContext);
  console.log(showMenu);
  return (
    <div className="burger-position">
      <div className='burger-fixed'>
        <button onClick={() => setShowMenu(!showMenu)} className="btn btn-outline-secondary"> Burger </button>
      </div>
    </div>
  );
};

export default MenuBurger;
