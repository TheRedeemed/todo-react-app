import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UserProfileMenu from '../UserProfile/UserProfileMenu'
import AppHelpers from '../Utils/AppHelpers'
import LogoutHelpers from '../Logout/LogoutHelpers'
import { withRouter } from 'react-router-dom'

const Header = ({...props}) => {
    console.log(props)
    const isUserLoggedIn = AppHelpers.isUserLoggedIn()
    
    const handleLogoutClick = () => {
        LogoutHelpers.logout()
        props.history.push('/logout')
    }

    return(
        <AppBar position='static'>
            <Toolbar style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6'>MY TODO</Typography>
                {isUserLoggedIn && <UserProfileMenu userInfo={isUserLoggedIn} onLogoutClick={handleLogoutClick} />}
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Header)