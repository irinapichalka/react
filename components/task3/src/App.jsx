import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

const App = () => {
  return <Comment user={userInfo} text='Good job!' date={new Date()} />;
};

export default App;
