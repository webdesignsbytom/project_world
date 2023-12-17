import React from 'react'

function SunAnimation({ sunPosition }) {
  return (
    <div
    className='absolute top-1/2'
    style={{
      left: `${sunPosition}%`,
      transform: 'translate(-50%, -50%)',
    }}
  >
    ☀️
  </div>
  )
}

export default SunAnimation