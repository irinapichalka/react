import React from 'react';

function Greeting(props) {
  return (
    <div className='greeting'>
      {`My name is ${props.name}. I'm ${props.age} years old`}
    </div>
  );
}
export default Greeting;
