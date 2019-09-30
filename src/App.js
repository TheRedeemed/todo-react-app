import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import LoginForm from './components/Login/LoginForm'
import WelcomePage from './components/Login/WelcomePage'
import ErrorPage from './components/Login/ErrorPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path='/welcome/:username' component={WelcomePage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
