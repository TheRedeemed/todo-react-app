import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import LoginForm from './components/Login/LoginForm'
import Home from './components/Todos/Home'
import ErrorPage from './components/Login/ErrorPage'
import Header from './components/AppHeader/Header'
import LogoutPage from './components/Logout/LogoutPage'
import AuthenticatedRoute from './components/Login/AuthenticatedRoute'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <AuthenticatedRoute path='/home/:username' component={Home} />
        <Route path='/logout' component={LogoutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
