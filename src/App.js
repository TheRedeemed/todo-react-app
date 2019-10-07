import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import LoginForm from './components/Login/LoginForm'
import Home from './components/Login/Home'
import ErrorPage from './components/Login/ErrorPage'
// import TodoList from './components/Todos/TodoList'
import Header from './components/AppHeader/Header'
// import Footer from './components/AppFooter/Footer'
import LogoutPage from './components/Logout/LogoutPage'
// import AppHelpers from './components/Utils/AppHelpers'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path='/home/:username' component={Home} />
        <Route path='/logout' component={LogoutPage} />
        {/* <Route path='/todos' component={TodoList} /> */}
        <Route component={ErrorPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
