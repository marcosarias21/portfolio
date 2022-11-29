import { useState, createContext } from 'react';

const burgerContext = createContext();

export const BurgerProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const data = { showMenu, setShowMenu };

  return (<burgerContext.Provider value={data} > {children} </burgerContext.Provider>);
};

export default burgerContext;
