import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import InitialPage from './pages/InitialPage/InitialPage';

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='' element={<InitialPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  );
};

export default App;
