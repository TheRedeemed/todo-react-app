import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LogoutHelpers from './LogoutHelpers'

const LogoutPage = () => {

    useEffect(() => LogoutHelpers.logout(), [])

    return(
        <div>
            <p>You have been successfully logged out...</p>
            <p>To login again. Click
                <NavLink to='/' style={{marginLeft:'5px'}}>Here</NavLink>
            </p>
        </div>
    )
}

export default LogoutPage