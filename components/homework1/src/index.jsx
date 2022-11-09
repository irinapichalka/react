import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Greeting name='John Doe' age='17' />, rootElement);
