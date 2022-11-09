import React from 'react';
const getAge = (date) => {
  const today = new Date();
  const birthDate = new Date(date);
  let age;
  age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
function Greeting(props) {
  const age = getAge(props.birthDate);
  return (
    <div className='greeting'>
      {`My name is ${props.firstName} ${props.lastName}. I'm ${age} years old`}
    </div>
  );
}
export default Greeting;
