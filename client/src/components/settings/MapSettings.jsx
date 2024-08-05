import React, { useContext } from 'react';
// Context
import { MapContext } from '../../context/MapContext';
import { DisplaySettingsArray } from '../../utils/map/MapData';

function MapSettings() {
  const { mapPageSettings, setMapPageSettings } = useContext(MapContext);

  const handleToggleChange = (setting) => {
    setMapPageSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleStyleChange = (style) => {
    setMapPageSettings((prevSettings) => ({
      ...prevSettings,
      selectedStyle: style,
    }));
  };
  
  return (
    <section className='grid bg-yellow-200 p-4 h-fit gap-2'>
      <div className='flex items-center'>
        <span className='flex-1'>Display Longitude and Latitude</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={mapPageSettings.displayLongitudeAndLatitude}
            onChange={() => handleToggleChange('displayLongitudeAndLatitude')}
          />
          <span className='slider'></span>
        </label>
      </div>
      <div className='flex items-center'>
        <span className='flex-1'>Antarctica Mode</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={mapPageSettings.antarcticaMode}
            onChange={() => handleToggleChange('antarcticaMode')}
          />
          <span className='slider'></span>
        </label>
      </div>
      <div className='flex items-center'>
        <span className='flex-1'>Animated Sea</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={mapPageSettings.animatedSea}
            onChange={() => handleToggleChange('animatedSea')}
          />
          <span className='slider'></span>
        </label>
      </div>
      <div className='flex items-center'>
        <span className='flex-1'>Mouse Over Container</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={mapPageSettings.mouseOverContainer}
            onChange={() => handleToggleChange('mouseOverContainerActive')}
          />
          <span className='slider'></span>
        </label>
      </div>
      <div className='flex items-center'>
        <span className='flex-1'>Real Time Settings</span>
        <label className='switch'>
          <input
            type='checkbox'
            checked={mapPageSettings.realTimeSettings}
            onChange={() => handleToggleChange('realTimeSettings')}
          />
          <span className='slider'></span>
        </label>
      </div>

      <div className='h-1 bg-gray-500'></div>

      <section className='grid'>
        <div className='grid py-1'>Map Style</div>
        <section className='grid grid-cols-3'>
        {DisplaySettingsArray.map((display, index) => (
            <div key={index} className='grid'>
              <div>
                {display.backgroundImage ? (
                  <img
                    src={display.backgroundImage}
                    alt={display.title}
                    className='max-w-[200px] w-[200px] h-auto'
                  />
                ) : (
                  <div className='max-w-[200px] w-[200px] h-auto'></div>
                )}
              </div>
              <div className='flex justify-center items-center'>
                <span className='mr-2'>{display.title}</span>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={mapPageSettings.selectedStyle.name === display.name}
                    onChange={() => handleStyleChange(display)}
                  />
                  <span className='slider'></span>
                </label>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

export default MapSettings;
