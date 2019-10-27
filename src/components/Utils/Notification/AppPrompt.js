import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'

const AppPrompt = ({...props}) => {
    const { toggleDisplay, promtMessage, onCloseClick, onConfirmClick } = props;

    return(
        <Dialog 
            open={toggleDisplay} 
            onClose={onCloseClick}
        >
        <div 
            style={{
                display: 'flex',
                flexFlow: 'column',
                width: '400px',
                height: '200px',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h3>{promtMessage}</h3>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row',
                    width: '150px',
                    justifyContent: 'space-between'
                }}
            >
                <Button 
                    variant='contained' 
                    size='medium'
                    color='secondary' 
                    onClick={onCloseClick}
                >
                    NO
                </Button>
                <Button 
                    variant='contained' 
                    size='medium'
                    color='primary' 
                    onClick={onConfirmClick}
                >
                    YES
                </Button>
            </div>
        </div>
      </Dialog>
    )
}

export default AppPrompt;