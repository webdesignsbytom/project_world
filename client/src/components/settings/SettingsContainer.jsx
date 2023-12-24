import React from 'react';
import SettingsForm from '../forms/SettingsForm';

function SettingsContainer() {
  return (
    <section className='grid absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2 bg-green-400 outline outline-1 outline-black rounded-lg p-1'>
      <article className='grid text-center'>
        <div>
          <h3>Settings</h3>
          <p>Adjust what images you want found to populate your map</p>
        </div>
      </article>

      <section className='grid overflow-hidden'>
        <SettingsForm />
      </section>
    </section>
  );
}

export default SettingsContainer;
