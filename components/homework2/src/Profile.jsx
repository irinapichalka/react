import React from 'react';
import moment from 'moment';
const formatDate = (date) => moment(date).format('DD MMM YYYY');

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

function Profile(props) {
  const age = getAge(props.user.birthDate);
  return (
    <>
      <div className='profile__name'>
        {`${props.user.firstName} ${props.user.lastName}`}
      </div>
      <div className='profile__birth'>
        {`Was born ${formatDate(props.user.birthDate)} in ${
          props.user.birthPlace
        }`}
      </div>
    </>
  );
}
export default Profile;
