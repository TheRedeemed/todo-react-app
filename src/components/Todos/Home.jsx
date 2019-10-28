import React from 'react'
import TodoContainer from './TodoContainer'

const WelcomePage = ({...props}) => {
    const { match } = props
    
    return (
        <div
            style={{
                margin: '7px'
            }}
        >
            <h1>Welcome {match.params.username}</h1>
            <TodoContainer />
        </div>
    )
}

export default WelcomePage