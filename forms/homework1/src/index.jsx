import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');
const users = [
  {
    name: 'Tad',
    age: '18',
    id: '01',
  },
  {
    name: 'Anna',
    age: '45',
    id: '02',
  },
  {
    name: 'Bob',
    age: '49',
    id: '01',
  },
];

ReactDOM.render(<UsersList users={users} />, rootElement);
