import React from 'react'
import TodoList from '../Todos/TodoList'
import Button from '@material-ui/core/Button'
import LogoutHelpers from '../Logout/LogoutHelpers'

const WelcomePage = ({...props}) => {
    const { match } = props
    return (
        <>
            <h1>Welcome {match.params.username}</h1>
            <TodoList />
            <Button 
                variant='contained' 
                size='small'
                color='primary' 
                type='button' 
                onClick={() => LogoutHelpers.logout()}
            >
                Logout
            </Button>
        </>
    )
}

export default WelcomePage