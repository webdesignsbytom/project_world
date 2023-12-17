import React, { useContext, useEffect, useState } from 'react';
// Components
import { ToggleContext } from '../../context/ToggleContext';
import { CountriesDataArray } from '../../utils/data/CountriesData';
import RightHandMenuBar from '../../components/settings/RightHandMenuBar';
import OwnerBanner from '../../components/overlays/OwnerBanner';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);
  const [countriesArray, setCountiesArray] = useState(CountriesDataArray);

  const calculatePosition = (isSun) => {
    const hour = new Date().getHours();
    let position;
    if (isSun) {
      position = (hour / 24) * 100; // Sun's position calculation
    } else {
      position = (((hour + 12) % 24) / 24) * 100; // Moon's position calculation
    }
    return position;
  };

  // Sun and moon
  const [sunPosition, setSunPosition] = useState(calculatePosition(true));
  const [moonPosition, setMoonPosition] = useState(calculatePosition(false));

  useEffect(() => {
    setActiveNav('/');
    const interval = setInterval(() => {
      setSunPosition(calculatePosition(true));
      setMoonPosition(calculatePosition(false));
    }, 60000); // Every minute
    return () => clearInterval(interval);
  }, []);

  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseOver = (countryId) => {
    setHoveredCountry(countryId);
    window.onmousemove = (e) => {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
    };
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
    window.onmousemove = null;
  };

  return (
    <div className='grid font-poppins shadow-[inset_-12px_-8px_40px_#46464690] h-screen max-h-screen overflow-hidden'>
      {/* Main */}
      <main className='relative grid h-full p-1 shadow-[inset_-12px_-8px_40px_#46464690] overflow-hidden animate-ocean-animation'>
        <OwnerBanner />
        <RightHandMenuBar />
        {/* Animated Plane */}
        <div className='absolute'>✈️</div>
        {/* Sun Icon */}
        <div
          className='absolute top-1/2'
          style={{
            left: `${sunPosition}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          ☀️
        </div>
        {/* Moon Icon */}
        <div
          className='absolute top-1/2'
          style={{
            left: `${moonPosition}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          🌑
        </div>

        {/* Map */}
        <svg
          id='allSvg'
          baseProfile='tiny'
          fill='#ececec'
          stroke='red'
          strokeLinecap='round'
          strokeLinejoin='round'
          version='1.2'
          viewBox='0 0 2000 857'
          xmlns='http://www.w3.org/2000/svg'
          className='h-full w-full'
        >
          {countriesArray.map((country) =>
            country.countryBorderPaths.map((territory, territoryIndex) => (
              <path
                key={`${country.id}-${territoryIndex}`}
                className={`${territory.class} ${
                  hoveredCountry === territory.id ? 'hovered-country' : ''
                }`}
                d={territory.d}
                id={territory.id}
                onMouseOver={() => handleMouseOver(territory.id)}
                onMouseLeave={handleMouseLeave}
              />
            ))
          )}
        </svg>
        {hoveredCountry && (
          <div
            id='name'
            style={{
              position: 'absolute',
              top: `${tooltipPosition.y - 60}px`,
              left: `${tooltipPosition.x + 10}px`,
              opacity: hoveredCountry ? 1 : 0,
            }}
            
          >
            <p id='namep'>{hoveredCountry}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
