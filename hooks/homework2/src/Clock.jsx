import React, { Component, useState, useEffect } from 'react';
import './index.scss';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};
const formatDate = (date) => moment(date).format('hh:mm:ss A');

const Clock = ({ offset, location }) => {
  const [time, setTime] = useState(getTimeWithOffset(offset));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeWithOffset(offset));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='clock'>
      <div className='clock__location'>{location}</div>
      <div className='clock__time'>{formatDate(time)}</div>
    </div>
  );
};

export default Clock;
