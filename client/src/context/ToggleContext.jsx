import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [activeNav, setActiveNav] = useState('/');
  // Display booleans
  const [settingsMenuIsOpen, setSettingsMenuIsOpen] = useState(false);
  const [statsDisplayIsOpen, setStatsDisplayIsOpen] = useState(true);
  const [musicIsMuted, setMusicIsMuted] = useState(false);

  const toggleNavbarOpenClosed = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const muteUnmuteMusic = () => {
    console.log('XXXX');
    setMusicIsMuted(!musicIsMuted);
  };

  const openSettingsContainer = () => {
    console.log('openSettingsContainer');
    setSettingsMenuIsOpen(!settingsMenuIsOpen);
  };

  const toggleStatsDisplay = () => {
    console.log('openSettingsContainer');
    setStatsDisplayIsOpen(!statsDisplayIsOpen);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbarOpenClosed,
        activeNav,
        setActiveNav,
        settingsMenuIsOpen,
        setSettingsMenuIsOpen,
        openSettingsContainer,
        statsDisplayIsOpen,
        setStatsDisplayIsOpen,
        musicIsMuted,
        setMusicIsMuted,
        muteUnmuteMusic,
        toggleStatsDisplay,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
