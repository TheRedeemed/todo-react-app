import React from 'react'
import { NavLink } from 'react-router-dom'

const LogoutPage = () => {
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