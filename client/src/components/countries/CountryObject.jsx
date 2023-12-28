import React from 'react';
// Images
import PinIcon from '../../assets/images/svg/pin.svg'

function CountryObject({
  country,
  territoryIndex,
  territory,
  hoveredCountry,
  activeCountry,
  handleMouseOver,
  handleMouseLeave,
  visited
}) {
  console.log('vistied', visited);
  return (
    <path
      key={`${country.id}-${territoryIndex}`}
      className={`${territory.class} ${
        hoveredCountry === territory.id ? 'hovered-country countryOutline' : ''
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
      />
  );
}

export default CountryObject;
