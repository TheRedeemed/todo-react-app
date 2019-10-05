import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import LoginForm from './components/Login/LoginForm'
import Home from './components/Login/Home'
import ErrorPage from './components/Login/ErrorPage'
import TodoList from './components/Todos/TodoList'
import Header from './components/AppHeader/Header'
import Footer from './components/AppFooter/Footer'

function App() {
  return (
    // <div className="App">
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path='/home/:username' component={Home} />
        <Route path='/todos' component={TodoList} />
        <Route component={ErrorPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
