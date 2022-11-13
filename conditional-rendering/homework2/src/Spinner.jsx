import React from 'react';

const Spinner = ({ size }) => {
  const spinnerStyle = {
    width: size + 'px',
    height: size + 'px',
  };
  return <span className='spinner' style={spinnerStyle}></span>;
};

export default Spinner;
