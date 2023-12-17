import React from 'react';

function MoonAnimation({ moonPosition }) {
  return (
    <div
      className='absolute top-1/2'
      style={{
        left: `${moonPosition}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      🌑
    </div>
  );
}

export default MoonAnimation;
