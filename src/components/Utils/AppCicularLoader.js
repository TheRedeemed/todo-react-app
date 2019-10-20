import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const AppCircularLoader = ({...props}) => {
    const { loadingMessage } = props
    return(
        <>
            <h4>{loadingMessage}</h4>
            <CircularProgress />
        </>
    )
}

export default AppCircularLoader