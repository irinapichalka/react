import React from 'react';
import UserForm from './UserForm';

const App = () => {
  const createUser = (userData, event) => {
    //event.preventDeafault();

    const formData = [...new FormData(userData)].reduce(
      (acc, [name, value]) => ({ ...acc, [name]: value }),
      {}
    );
    console.log(formData);
  };
  return <UserForm onSubmit={createUser} />;
};

export default App;
