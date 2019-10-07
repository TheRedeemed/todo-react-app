import React, {useState, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UserProfileMenu from '../UserProfile/UserProfileMenu'
import AppHelpers from '../Utils/AppHelpers'

const Header = () => {
    const isUserLoggedIn = AppHelpers.isUserLoggedIn()
    const [userInfo, setuserInfo] = useState(isUserLoggedIn)

    useEffect(() => setuserInfo(isUserLoggedIn), [isUserLoggedIn])

    return(
        <AppBar position='static'>
            <Toolbar style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6'>MY TODO</Typography>
                {userInfo && <UserProfileMenu userInfo={userInfo} />}
            </Toolbar>
        </AppBar>
    )
}

export default Header