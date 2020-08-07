import React from 'react';

const HandComponent = ({ type, style }) => {
  const className =
    type === 'hour'
      ? 'hour-hand'
      : type === 'minute'
      ? 'minute-hand'
      : 'second-hand';

  return <div className={className} style={style}></div>;
};

export default HandComponent;
