import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { InitialPage } from './pages/InitialPage';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<InitialPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
