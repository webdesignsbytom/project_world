import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
import { MapContext } from '../../context/MapContext';
// Icons
import { IoLogOut } from 'react-icons/io5';
import { IoIosStats } from 'react-icons/io';
import { IoIosImages } from 'react-icons/io';
import { IoVolumeMute } from 'react-icons/io5';
import { IoVolumeHigh } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { IoSettings } from 'react-icons/io5';
// Constants
import { HOME_PAGE_URL } from '../../utils/Constants';

function RightSideQatToolbar() {
  const {
    mapPageSettings,
    toggleMusic,
    toggleQatToolbar,
    toggleMapSettingsContainer,
    toggleStatsContainer,
    toggleUploadImagesContainer,
  } = useContext(MapContext);
  const { setUser } = useContext(UserContext);
  const { setActiveNav } = useContext(ToggleContext);

  let navigate = useNavigate();

  // TODO: create reusable function
  const logoutUser = (event) => {
    event.preventDefault();
    setActiveNav(HOME_PAGE_URL);
    setUser({});
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate(HOME_PAGE_URL, { replace: true });
  };

  return (
    <section
      title='Settings menu (double click to close)'
      className='grid absolute right-2 top-2 h-full cursor-pointer'
      onDoubleClick={toggleQatToolbar}
    >
      <div
        className={`grid gap-2 border-solid border-black border-2 h-fit w-fit rounded-full ${mapPageSettings.selectedStyle.styleSettings.altBackgroundColour} px-2 py-4 shadow-lg`}
      >
        <Link
          to={HOME_PAGE_URL}
          title='Home page'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid h-full items-center justify-center'>
            <IoHome />
          </div>
        </Link>
        <button
          onClick={toggleMapSettingsContainer}
          title='Open Settings'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid items-center justify-center'>
            <IoSettings />
          </div>
        </button>
        <button
          onClick={toggleStatsContainer}
          title='Hide Stats Display'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid items-center justify-center'>
            <IoIosStats />
          </div>
        </button>
        <button
          onClick={toggleUploadImagesContainer}
          title='Upload Images'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid items-center justify-center'>
            <IoIosImages />
          </div>
        </button>
        <button
          onClick={toggleMusic}
          title='Mute Music'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid items-center justify-center'>
            {mapPageSettings.isMuted ? <IoVolumeHigh /> : <IoVolumeMute />}
          </div>
        </button>
        <button
          onClick={logoutUser}
          title='Logout now'
          className={`border-solid border-black border-2 rounded-full text-xl p-1 ${mapPageSettings.selectedStyle.styleSettings.buttonColour} hover:brightness-110 cursor-pointer no__highlights h-[50px] w-[50px] active:scale-95 shadow-lg`}
        >
          <div className='grid items-center justify-center'>
            <IoLogOut />
          </div>
        </button>
      </div>
    </section>
  );
}

export default RightSideQatToolbar;
