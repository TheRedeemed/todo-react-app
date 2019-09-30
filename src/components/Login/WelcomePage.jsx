import React from 'react'

const WelcomePage = ({...props}) => {
    const { match } = props
    return (
        <div>Welcome {match.params.username}</div>
    )
}

export default WelcomePage