import React from 'react';

function OwnerBanner() {
  return (
    <section className='absolute top-1 left-1/2 transform -translate-x-1/2 bg-red-500 p-2 gap-2 rounded grid grid-cols-a1a'>
      <section className='grid p-2'>
        <img src='' alt='' className='h-10 w-10 object-cover' />
      </section>
      <section className='grid bg-white rounded'>
        <article className='text-center leading-4'>
          <h1 className='text-xl font-semibold'>Chloe and Vladana</h1>
          <h2>See the World!</h2>
        </article>
      </section>
      <section className='grid p-2'>
        <img src='' alt='' className='h-10 w-10 object-cover' />
      </section>
    </section>
  );
}

export default OwnerBanner;
