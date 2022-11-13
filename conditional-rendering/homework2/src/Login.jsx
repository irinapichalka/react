import React from 'react';
import './index.scss';
import Spinner from './Spinner';

const Login = (props) => {
  return (
    <>
      <button className='login btn' onClick={props.onLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
