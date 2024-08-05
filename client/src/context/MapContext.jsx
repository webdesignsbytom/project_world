import React from 'react';
import { useState } from 'react';
// Data
import { DisplaySettingsArray } from '../utils/map/MapData';

// Context
export const MapContext = React.createContext();

const MapContextProvider = ({ children }) => {
  const [mapPageSettings, setMapPageSettings] = useState({
    // displaySettings: displaySettingsArray[0],
    displayLongitudeAndLatitude: true,
    includeLongitudeAndLatitudeText: false,
    selectedStyle: DisplaySettingsArray[0],
    animatedSea: false,
    settingsMenuIsOpen: false,
    rightQatMenu: true,
    statisticsContainer: true,
    isMuted: true,
  });

  const toggleMapSettings = () => {
    setMapPageSettings({
      ...mapPageSettings,
      settingsMenuIsOpen: !mapPageSettings.settingsMenuIsOpen
    })
  }

  const toggleQatToolbar = () => {
    setMapPageSettings({
      ...mapPageSettings,
      rightQatMenu: !mapPageSettings.rightQatMenu
    })
  }

  const toggleStatsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      statisticsContainer: !mapPageSettings.statisticsContainer
    })
  }

  const toggleMusic = () => {
    setMapPageSettings({
      ...mapPageSettings,
      isMuted: !mapPageSettings.isMuted
    })
  }

  return (
    <MapContext.Provider
      value={{
        mapPageSettings,
        setMapPageSettings,
        toggleMapSettings,
        toggleMusic,
        toggleQatToolbar,
        toggleStatsContainer
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
