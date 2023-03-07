
import React from 'react';
import "./App.css";
import UserPool from "./UserPool";
import Signup from './Components/Signup';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <Signup />
      <Login />
    </div>
  );
}

export default App;