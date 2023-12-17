import React, { useState } from 'react';
// Data
import { TempImageArray } from '../../utils/data/TempImagesArray';

function CountryDisplayContainer({ tooltipPosition, hoveredCountry }) {
  const [tempDataArray, setTempDataArray] = useState(TempImageArray);

  return (
    <section
      id='name'
      style={{
        position: 'absolute',
        top: `${tooltipPosition.y - 100}px`,
        left: `${tooltipPosition.x + 100}px`,
        opacity: hoveredCountry ? 1 : 0,
      }}
    >
      <article className='p-2 outline outline-1 outline-black rounded-lg bg-blue-900 w-[300px] overflow-hidden'>
        <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl text-center'>
          <h2 id='namep' className='font-poppins text-xl font-semibold text-white'>{hoveredCountry}</h2>
        </div>
        <div className='w-full h-full overflow-hidden p-2'>
          <img
            className='object-cover w-full h-full rounded'
            src={tempDataArray[1].data}
            alt='things'
          />
        </div>
      </article>
    </section>
  );
}

export default CountryDisplayContainer;
