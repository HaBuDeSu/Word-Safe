import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import UserRegistration from './components/UserRegistration.js';
import Login from './components/Login.js';
import WordSafe from './components/WordSafe.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={Login}/>
      <Route path='/signup' component={UserRegistration}/>
      <Route path ='/wordsafe' component={WordSafe}/>
    </div>
  );
}

export default App;
