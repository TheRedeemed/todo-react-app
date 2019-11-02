import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../Services/AuthenticationService'

const AuthenticatedRoute = ({...props}) => {
    return AuthenticationService.isUserLoggedIn() ? <Route {...props} /> : <Redirect to='/' />
}

export default AuthenticatedRoute