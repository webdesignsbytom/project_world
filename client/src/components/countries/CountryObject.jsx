import React from 'react';
// Images
import PinIcon from '../../assets/images/svg/pin2.svg';

function CountryObject({
  country,
  territoryIndex,
  territory,
  hoveredCountry,
  activeCountry,
  handleMouseOver,
  handleMouseLeave,
  visited,
  exploreCountry
}) {
  return (
    <>
      <g className='relative' key={`${country.id}-${territoryIndex}`}>
        <path
          className={`${territory.class} ${
            hoveredCountry === territory.id
              ? 'hovered-country countryOutline'
              : ''
          }`}
          d={territory.d}
          id={territory.id}
          fill={
            activeCountry === territory.id
              ? '#66ff66' // Color when a country is hovered
              : `${country.defaultColor}` // Random default color assigned to the country
          }
          onMouseOver={() => handleMouseOver(territory.id)}
          onMouseLeave={handleMouseLeave}
          onMouseUp={() => exploreCountry(territory.id)}
        />
      </g>
      {visited && (
        <image
          href={PinIcon}
          className='absolute top-5 right-20'
          height='30'
          width='20'
        />
      )}
    </>
  );
}

export default CountryObject;
