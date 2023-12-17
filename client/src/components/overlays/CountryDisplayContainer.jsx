import React from 'react'

function CountryDisplayContainer({ tooltipPosition, hoveredCountry }) {
  return (
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
  )
}

export default CountryDisplayContainer