import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';

function RightHandMenuBar() {
  const { setUser } = useContext(UserContext);
  const { setActiveNav, muteUnmuteMusic, openSettingsContainer, toggleStatsDisplay, toggleUploadImagesContainer } =
    useContext(ToggleContext);

  let navigate = useNavigate();

  // TODO: create reusable function
  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav('/');
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  return (
    <section className='grid absolute right-2 top-2 h-full'>
      <div className='grid gap-2 outline outline-1 outline-black h-fit w-fit rounded bg-green-900 p-2'>
        <div
          onClick={openSettingsContainer}
          title='Open Settings'
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          <span>⚙️</span>
        </div>
        <div
          onClick={toggleStatsDisplay}
          title='Hide Stats Display'
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          <span>⚙️</span>
        </div>
        <div
          onClick={toggleUploadImagesContainer}
          title='Upload Images'
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          <span>⚙️</span>
        </div>
        <div
          onClick={muteUnmuteMusic}
          title='Mute Music'
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          <span>⚙️</span>
        </div>
        <div
          onClick={logoutUser}
          title='Log Out'
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          <span>⚙️</span>
        </div>
      </div>
    </section>
  );
}

export default RightHandMenuBar;
