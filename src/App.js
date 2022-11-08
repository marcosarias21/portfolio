import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { InitialPage } from './pages/InitialPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<InitialPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
