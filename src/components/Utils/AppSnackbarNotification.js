import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const AppSnackbarNotification = ({...props}) => {
    const { shouldDisplayNotification, onCloseNotification, notificationMessage } = props

    return (
        <Snackbar
            variant="error"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={shouldDisplayNotification}
            onClose={onCloseNotification}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{notificationMessage}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={onCloseNotification}
                >
                    <CloseIcon />
                </IconButton>
            ]}
      />
    )
}

export default AppSnackbarNotification;