import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const UserProfileMenu = ({...props}) => {
    const { userInfo, onLogoutClick } = props
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleUserProfileMenuDisplay = event => setAnchorEl(event.currentTarget)
    const handleUserProfileMenuClose = () => setAnchorEl(null)

    return(
        <>
        <Avatar onClick={handleUserProfileMenuDisplay}>{userInfo && userInfo.charAt(0)}</Avatar>
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={open}
            onClose={handleUserProfileMenuClose}
        >
            <MenuItem>{userInfo}</MenuItem>
            <MenuItem onClick={() => onLogoutClick()}>Logout</MenuItem>
        </Menu>
        </>
    )
}

export default UserProfileMenu