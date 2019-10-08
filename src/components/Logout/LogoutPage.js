import React from 'react'
import { NavLink } from 'react-router-dom'

const LogoutPage = () => {
    return(
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            marginTop: '50px'
        }}>
            <h2>You have been successfully logged out...</h2>
            <h2>To login again. Click
                <NavLink to='/' style={{marginLeft:'5px'}}>Here</NavLink>
            </h2>
        </div>
    )
}

export default LogoutPage