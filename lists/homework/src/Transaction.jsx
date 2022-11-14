import React from 'react';
import moment from 'moment';
const formatDate = (date) => moment(date).format('DD MMM');
const formatTime = (date) => moment(date).format('HH:MM');
const formatNumber = (number) => new Intl.NumberFormat('en-GB').format(number);

const Transaction = ({ from, to, amount, rate, time, id }) => {
  return (
    <li className='transaction'>
      <span className='transaction__date'>{formatDate(time)}</span>
      <span className='transaction__time'>{formatTime(time)}</span>
      <span className='transaction__assets'>{`${from} → ${to}`}</span>
      <span className='transaction__rate'>{formatNumber(rate)}</span>
      <span className='transaction__amount'>{formatNumber(amount)}</span>
    </li>
  );
};

export default Transaction;
