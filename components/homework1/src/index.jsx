import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('December 17, 2021 03:24:00'),
};

ReactDOM.render(<Greeting user={user} />, rootElement);
