import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import AppCircularLoader from '../Utils/AppCicularLoader'
import TodoDataService from '../Api/TodoDataService'
import AuthenticationService from '../Services/AuthenticationService'
import AppSnackbarNotification from '../Utils/AppSnackbarNotification'

const TodoList = () => {
    const [loadingMessage, setLoadingMessage] = useState(true)
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false)
    const [todoList, setTodoList] = useState([])

    const getTodoListByUsername = (username) => {
        TodoDataService.getAllTodosByUsername(username)
                        .then(response => {
                            setLoadingMessage(false) 
                            setTodoList([...response.data])
                        }).catch(() => { 
                            setLoadingMessage(false) 
                            setDisplayErrorMessage(true)
                        }) 
    }

    useEffect(() => getTodoListByUsername(AuthenticationService.getLoggedInUserName()), [])

    return(
        <div style={{
            display: 'flex',
            flexFlow: 'column'
        }}>
            <h1>Todo List</h1>
            <div style={{
                display: 'flex',
                flexFlow: 'wrap'
            }}> 
                {
                    loadingMessage ?
                    <span style={{
                            display: 'flex',
                            flexFlow: 'column',
                            alignItems: 'center',
                            width: '100%'}}>
                        <AppCircularLoader loadingMessage = 'Loading Todos...' size={70}/>
                    </span>
                    :
                    todoList.map(todo => <Todo 
                                            key={todo.id}
                                            description={todo.description}
                                            done={todo.done}
                                            targetDate={todo.targetDate}
                                        />
                                )
                }
            </div>
            <AppSnackbarNotification 
                shouldDisplayNotification={displayErrorMessage} 
                onCloseNotification={() => setDisplayErrorMessage(false)} 
                notificationMessage='An Error Occured while loading Todo List'
            />
        </div>
    )
}

export default TodoList