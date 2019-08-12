import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/sign-up' component={SignUp}/>
      <Route path ='/log-in' component={LogIn}/>
      <PrivateRoute path = '/wordsafe' component={WordSafe}/>
    </div>
  );
}

export default App;
.
