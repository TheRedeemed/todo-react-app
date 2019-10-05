import React from 'react'
import TodoList from '../Todos/TodoList'

const WelcomePage = ({...props}) => {
    const { match } = props
    return (
        <>
            <h1>Welcome {match.params.username}</h1>
            <TodoList />
        </>
    )
}

export default WelcomePage