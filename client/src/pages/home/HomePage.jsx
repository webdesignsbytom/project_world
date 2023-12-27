import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    setActiveNav('/')

    if (user) {
      navigateToMapPage()
    }
  }, [user])

  const navigateToMapPage = () => {
    navigate('/world-map', { replace: true });
  };

  return (
    <div className='grid font-poppins shadow-[inset_-12px_-8px_40px_#46464690] h-screen max-h-screen overflow-hidden'>
      {/* Main */}
      <main className='relative grid h-full p-1 shadow-[inset_-12px_-8px_40px_#46464690] overflow-hidden animate-ocean-animation'>
        Welcome
      </main>
    </div>
  );
}

export default HomePage;
