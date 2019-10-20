import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import AppCircularLoader from '../Utils/AppCicularLoader'
import TodoDataService from '../Api/TodoDataService'
import AuthenticationService from '../Services/AuthenticationService'

const TodoList = () => {
    const [loadingMessage, setLoadingMessage] = useState(true)
    const [todoList, setTodoList] = useState([])

    const getTodoListByUsername = (username) => {
        TodoDataService.getAllTodosByUsername(username)
                        .then(response => {
                            setLoadingMessage(false) 
                            setTodoList([...response.data])
                        })
                        .catch(error => console.log(error.response.data.message))
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
                        <AppCircularLoader loadingMessage = 'Loading Todos from the server'/>
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
        </div>
    )
}

export default TodoList