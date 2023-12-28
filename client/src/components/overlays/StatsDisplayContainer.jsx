import React from 'react';

function StatsDisplayContainer() {
  const tempdata = {
    numCountriesVisited: 10,
    numContinentsVisited: 4,
    numTotalPhotos: 400,
    numTotalMonumentsVisited: 7,
    totalMilesTravelled: 23000,
  };
  return (
    <section className='absolute left-2 top-2'>
      <div className='py-1 px-2 rounded-lg bg-green-900 outline outline-1 outline-black text-white'>
        <article>
          <div className='text-center'>
            <h6>Stats</h6>
          </div>
          <div>
            <span>Countires visited: {tempdata.numCountriesVisited}</span>
          </div>
          <div>
            <span>Continents visited: {tempdata.numContinentsVisited}</span>
          </div>
          <div>
            <span>Miles travelled: {tempdata.totalMilesTravelled}</span>
          </div>
          <div>
            <span>Monuments visited: {tempdata.numTotalMonumentsVisited}</span>
          </div>
          <div>
            <span>Total photos: {tempdata.numTotalPhotos}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default StatsDisplayContainer;
