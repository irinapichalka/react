import React from 'react';

const Avatar = (props) => {
  return (
    <img className='avatar' src={props.user.avatarUrl} alt={props.username} />
  );
};

export default Avatar;
