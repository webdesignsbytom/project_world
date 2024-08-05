import React, { useContext } from 'react'
// Icons
import { IoCloseCircleOutline } from 'react-icons/io5';
// Context
import { MapContext } from '../../context/MapContext';

function CountriesListContainer() {
    const { mapPageSettings, toggleCountryListContainer } = useContext(MapContext);

    return (
      <section
        className={`grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 ${mapPageSettings.selectedStyle.styleSettings.backgroundColour} rounded-lg shadow-xl`}
      >
        <div className='grid grid-rows-reg relative'>
          {/* Close button */}
          <button
            className='absolute grid right-4 top-4'
            onClick={toggleCountryListContainer}
          >
            <IoCloseCircleOutline
              size={35}
              className='hover:brightness-125 cursor-pointer text-gray-000 hover:shadow-xl rounded-full active:scale-95'
            />
          </button>
  
          <article className='grid text-center'>
            <div className='pt-4'>
              <h4 className='text-xl font-poppins font-medium'>Country Liss</h4>
              <h5 className='text-xl font-poppins font-medium'>And Nation States and Such</h5>
            </div>
          </article>
        </div>
      </section>
    );
  }

export default CountriesListContainer