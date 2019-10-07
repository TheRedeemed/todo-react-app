import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UserProfileMenu from '../UserProfile/UserProfileMenu'
import AppHelpers from '../Utils/AppHelpers'
import { withRouter } from 'react-router-dom'

const Header = () => {
    const isUserLoggedIn = AppHelpers.isUserLoggedIn()

    return(
        <AppBar position='static'>
            <Toolbar style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6'>MY TODO</Typography>
                {isUserLoggedIn && <UserProfileMenu userInfo={isUserLoggedIn} />}
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Header)