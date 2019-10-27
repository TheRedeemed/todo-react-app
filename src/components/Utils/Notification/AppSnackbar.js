import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import WarningIcon from '@material-ui/icons/Warning'
import InfoIcon from '@material-ui/icons/Info'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const variantDetails = [
    {
        key: 'error',
        backgroundColor: '#d32f2f',
        icon: ErrorIcon
    },
    {
        key: 'warning',
        backgroundColor: '#ffa000',
        icon: WarningIcon
    },
    {
        key: 'info',
        backgroundColor: '#1976d2',
        icon:InfoIcon
    },
    {
        key: 'success',
        backgroundColor: '#43a047',
        icon: CheckCircleIcon
    }
]

const AppSnackbarNotification = ({...props}) => {
    const { toggleDisplay, notificationMessage, notificationVariant, onCloseNotification } = props

    const variantObj = variantDetails.find(variant => variant.key === notificationVariant)

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={toggleDisplay}
            onClose={onCloseNotification}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
      >
          <SnackbarContent
                style={{
                    backgroundColor: variantObj && variantObj.backgroundColor
                }}
                aria-describedby="client-snackbar"
                message={
                    <span 
                        id="client-snackbar"
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            justifyContent: 'space-evenly',
                            fontWeight: 'bold',
                            alignItems: 'center',
                            width: '325px'
                        }}
                    >
                        {variantObj && React.createElement(variantObj.icon)}
                        {notificationMessage}
                    </span>
                }
                action={[
                    <IconButton 
                        key="close" 
                        aria-label="close" 
                        color="inherit" 
                        onClick={onCloseNotification}
                    >
                        <CloseIcon/>
                    </IconButton>
                ]}
            />
      </Snackbar>
    )
}

export default AppSnackbarNotification;