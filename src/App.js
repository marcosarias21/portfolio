import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import InitialPage from './pages/InitialPage/InitialPage';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='' element={<InitialPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
