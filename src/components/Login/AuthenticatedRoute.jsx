import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AppHelpers from '../Utils/AppHelpers'

const AuthenticatedRoute = ({...props}) => {
    return AppHelpers.isUserLoggedIn() ? <Route {...props} /> : <Redirect to='/' />
}

export default AuthenticatedRoute