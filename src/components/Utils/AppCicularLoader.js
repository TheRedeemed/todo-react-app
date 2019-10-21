import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const AppCircularLoader = ({...props}) => {
    const { loadingMessage, size } = props
    return(
        <>
            <h3>{loadingMessage}</h3>
            <CircularProgress size={size} />
        </>
    )
}

export default AppCircularLoader