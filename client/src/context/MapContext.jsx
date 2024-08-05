import React from 'react';
import { useState } from 'react';
// Data
import { DisplaySettingsArray } from '../utils/map/MapData';

// Context
export const MapContext = React.createContext();

const MapContextProvider = ({ children }) => {
  const [mapPageSettings, setMapPageSettings] = useState({
    displayLongitudeAndLatitude: true,
    includeLongitudeAndLatitudeText: false,
    selectedStyle: DisplaySettingsArray[0],
    rightQatMenu: true,
    settingsMenuIsOpen: false,
    statisticsContainer: true,
    welcomeContainer: true,
    imagesContainer: false,
    animatedSea: false,
    antarcticaMode: false,
    mouseOverContainerActive: true,
    realTimeSettings: true,
    countryInfoDisplayIsOpen: false,
    countryListContainer: true,
    isMuted: true,
  });

  const toggleMapSettingsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      settingsMenuIsOpen: !mapPageSettings.settingsMenuIsOpen,
    });
  };

  const toggleQatToolbar = () => {
    setMapPageSettings({
      ...mapPageSettings,
      rightQatMenu: !mapPageSettings.rightQatMenu,
    });
  };

  const toggleStatsContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      statisticsContainer: !mapPageSettings.statisticsContainer,
    });
  };

  const toggleUploadImagesContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      imagesContainer: !mapPageSettings.imagesContainer,
    });
  };

  const toggleCountryInfoContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      countryInfoDisplayIsOpen: !mapPageSettings.countryInfoDisplayIsOpen,
    });
  };

  const toggleWelcomeMessageContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      welcomeContainer: !mapPageSettings.welcomeContainer,
    });
  };
  const toggleCountryListContainer = () => {
    setMapPageSettings({
      ...mapPageSettings,
      countryListContainer: !mapPageSettings.countryListContainer,
    });
  };

  const toggleMusic = () => {
    setMapPageSettings({
      ...mapPageSettings,
      isMuted: !mapPageSettings.isMuted,
    });
  };

  return (
    <MapContext.Provider
      value={{
        mapPageSettings,
        setMapPageSettings,
        toggleMusic,
        toggleQatToolbar,
        toggleStatsContainer,
        toggleUploadImagesContainer,
        toggleWelcomeMessageContainer,
        toggleMapSettingsContainer,
        toggleCountryInfoContainer,
        toggleCountryListContainer
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
