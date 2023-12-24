import React from 'react';

function RightHandMenuBar() {
  const openSettingsContainer = () => {
    console.log('openSettingsContainer');
  };
  
  return (
    <section className='grid absolute right-2 top-2 h-full'>
      <div className='outline outline-1 outline-black h-fit w-fit rounded bg-green-900 p-2'>
        <div
          onClick={openSettingsContainer}
          className='outline outline-1 outline-black rounded-full text-xl p-1 bg-blue-400 hover:brightness-110 cursor-pointer'
        >
          ⚙️
        </div>
      </div>
    </section>
  );
}

export default RightHandMenuBar;
