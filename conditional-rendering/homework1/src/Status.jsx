import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = () => {
  let html;
  const isOnline = false;

  if (isOnline) {
    html = <Online />;
  } else {
    html = <Offline />;
  }

  return <div className='status'>{html}</div>;
};

export default Status;
