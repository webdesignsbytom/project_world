import React, { useContext, useState } from 'react';
// Data
import { CountriesDataArray } from '../../utils/data/CountriesData';
// Functions
import { createLongAndLatLines } from '../../utils/map/MapFunctions';
// Components
import CountryObject from '../../components/countries/CountryObject';
// Context
import { MapContext } from '../../context/MapContext';
import SettingsMainContainer from '../../components/settings/SettingsMainContainer';
import RightSideQatToolbar from '../../components/settings/RightSideQatToolbar';
import StatisticsContainer from '../../components/overlays/StatisticsContainer';

function MapPage2() {
  const { mapPageSettings } = useContext(MapContext);

  // Mouse position data
  const [activeCountry, setActiveCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Mouse position
  const handleMouseOver = (countryId) => {
    setHoveredCountry(countryId);
    setActiveCountry(countryId);

    window.onmousemove = (e) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    setActiveCountry(null);

    window.onmousemove = null;
  };

  return (
    <div className='grid relative overflow-hidden h-full w-full'>
      {/* Rotate device notice */}
      <div className='landscape-warning text-center'>
        <span className='px-4'>
          Please rotate your device to landscape mode.
        </span>
      </div>

      {/* Map container */}
      <div
        className={`map-container grid h-screen w-full overflow-hidden md:p-1 ${
          mapPageSettings.animatedSea && 'animate-ocean-animation'
        }`}
        style={{
          backgroundImage: `url(${mapPageSettings.selectedStyle.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='grid h-full w-full overflow-hidden'>
          {/* Map */}
          <svg
            id='allSvg'
            baseProfile='tiny'
            fill='transparent'
            stroke='red'
            strokeLinecap='round'
            strokeLinejoin='round'
            version='1.2'
            viewBox='0 0 2000 1000'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-full cursor-pointer'
          >
            {/* Long and lat lines */}
            {mapPageSettings.displayLongitudeAndLatitude &&
              createLongAndLatLines(
                mapPageSettings.includeLongitudeAndLatitudeText
              )}

            {/* Countries Array */}
            {CountriesDataArray.map((country) =>
              country.countryBorderPaths.map((territory, territoryIndex) => (
                <CountryObject
                  country={country}
                  territoryIndex={territoryIndex}
                  territory={territory}
                  hoveredCountry={hoveredCountry}
                  activeCountry={activeCountry}
                  handleMouseOver={handleMouseOver}
                  handleMouseLeave={handleMouseLeave}
                  visited={country.visited}
                />
              ))
            )}
          </svg>
        </div>
      </div>

      {/* Settings container */}
      {mapPageSettings.settingsMenuIsOpen && <SettingsMainContainer />}

      {/* Right hand settings and other menu */}
      {mapPageSettings.rightQatMenu && <RightSideQatToolbar />}

              {/* Stats container */}
              {mapPageSettings.statisticsContainer && <StatisticsContainer />}
    </div>
  );
}

export default MapPage2;
