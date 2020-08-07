import React from 'react';

const InnerClock = ({ rotate }) => {
  return (
    <div
      className='dialLines'
      style={{ transform: `rotate(${rotate}deg)` }}
    ></div>
  );
};

export default InnerClock;
