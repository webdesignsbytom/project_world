import React, { useEffect, useRef, useState } from 'react';
// Data
import { TempImageArray } from '../../utils/data/TempImagesArray';
import Music1 from '../../assets/images/temp/music.mp3'

function CountryDisplayContainer({ tooltipPosition, hoveredCountry }) {
  const [tempDataArray, setTempDataArray] = useState(TempImageArray);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TempImageArray.length);
    }, 5000);

    // Play music
    audioRef.current.play();

    return () => {
      clearInterval(interval);
      // Pause music when component unmounts
      audioRef.current.pause();
    };
  }, []);

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
          <h2
            id='namep'
            className='font-poppins text-xl font-semibold text-white'
          >
            {hoveredCountry}
          </h2>
        </div>
        <audio ref={audioRef} src={Music1} loop muted autoPlay>
          Your browser does not support the audio element.
        </audio>
        <div className='w-full h-full overflow-hidden p-2'>
          <img
            className='object-cover w-full h-full rounded'
            src={tempDataArray[currentIndex].data}
            alt='things'
          />
        </div>
      </article>
    </section>
  );
}

export default CountryDisplayContainer;
