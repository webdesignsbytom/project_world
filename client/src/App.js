import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
// Pages
import HomePage from './pages/home/HomePage';
import LoginPage from './users/login/LoginPage';
import RegisterPage from './users/register/RegisterPage';
import Error404 from './pages/error/Error404';
// Context
import { UserContext } from './context/UserContext';
import MapPage from './pages/map/MapPage';

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path='/' index element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/world-map' element={<MapPage />} />
      <Route path='/sign-up' element={<RegisterPage />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}

export default App;
