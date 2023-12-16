import React, { useContext, useEffect, useState } from 'react';
// Components
import { Link, useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';
import { CountriesDataArray } from '../../utils/data/CountriesData';
function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  const [countriesArray, setCountiesArray] = useState(CountriesDataArray);

  console.log('countriesArray', countriesArray);

  useEffect(() => {
    setActiveNav('/');
  }, []);

  return (
    <div className='grid font-poppins shadow-[inset_-12px_-8px_40px_#46464690] h-screen max-h-screen overflow-hidden'>
      {/* Main */}
      <main className='grid h-full p-1 shadow-[inset_-12px_-8px_40px_#46464690] overflow-hidden animate-ocean-animation'>
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
                className={territory.class}
                d={territory.d}
                id={territory.id}
              />
            ))
          )}
        </svg>
      </main>
    </div>
  );
}

export default HomePage;
