import React from 'react'
import TodoContainer from './TodoContainer'

const WelcomePage = ({...props}) => {
    const { match } = props
    
    return (
        <>
            <h1>Welcome {match.params.username}</h1>
            <TodoContainer />
        </>
    )
}

export default WelcomePage