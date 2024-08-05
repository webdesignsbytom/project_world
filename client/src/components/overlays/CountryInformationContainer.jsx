import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

function CountryInformationContainer({ closeContainer }) {
  return (
    <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid z-50 w-full h-full p-10'>
      <div className='relative grid border-black border-solid border-4 rounded-lg bg-slate-50 px-2 py-4 w-full h-full'>
        CountryInformationContainer
        <div className='absolute grid right-4 top-4'>
          <IoCloseCircleOutline onClick={closeContainer} size={45} className='hover:brightness-50 cursor-pointer text-gray-500 hover:shadow-xl rounded-full active:scale-95' />
        </div>
      </div>
    </section>
  );
}

export default CountryInformationContainer;
