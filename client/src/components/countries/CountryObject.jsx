import React from 'react';
// Images
import PinIcon from '../../assets/images/svg/pin2.svg'

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
     <g key={`${country.id}-${territoryIndex}`}>
       <path
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
       {visited && (
         <image href={PinIcon} x={country.pinX} y={country.pinY} height="20" width="20" />
       )}
     </g>
   );
 }

export default CountryObject;
