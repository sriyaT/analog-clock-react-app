import React from 'react';
import './style.css';

const InnerClock = ({ rotate }) => {
  return (
    <div
      className='dialLines'
      style={{ transform: `rotate(${rotate}deg)` }}
    ></div>
  );
};

export default InnerClock;
