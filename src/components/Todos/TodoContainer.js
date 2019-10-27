import React, {useState, useEffect} from 'react'
import AppCircularLoader from '../Utils/AppCicularLoader'
import AppSnackbar from '../Utils/Notification/AppSnackbar' 
import AppPrompt from '../Utils/Notification/AppPrompt'
import TodoDataService from '../Api/TodoDataService'
import TodoList from './TodoList'

const TodoContainer = () => {
    const [loadingMessage, setLoadingMessage] = useState(true)
    const [displayNotification, setDisplayNotification] = useState(false)
    const [notificationVariant, setNotificationVariant] = useState('')
    const [displayPrompt, setDisplayPromt] = useState(false)
    const [promptConfirmValue, setPromptConfirmValue] = useState(null)
    const [notificationMessage, setNotificationMessage] = useState('')
    const [todoList, setTodoList] = useState([])

    const ERROR_MSG_LOADING_TODOLIST = 'An Error Occured While Loading Todo List'
    
    const getTodoListByUsername = () => {
        TodoDataService.getAllTodosByUsername()
                        .then(response => {
                            setLoadingMessage(false) 
                            setTodoList([...response.data])
                        }).catch(() => { 
                            setLoadingMessage(false) 
                            setNotificationMessage(ERROR_MSG_LOADING_TODOLIST)
                            setDisplayNotification(true)
                            setNotificationVariant('error')
                        }) 
    }

    const handleDisplayPrompt = (todoId) => {
        setDisplayPromt(!displayPrompt)
        setPromptConfirmValue(todoId)
    }

    const handleDeleteTodo = () => {
        const todoId = promptConfirmValue
        setDisplayPromt(!displayPrompt)
        TodoDataService.deleteTodoById(todoId)
                        .then(() => {
                            setTodoList([...todoList.filter(todo => (todo.id !== todoId))])
                            setNotificationMessage('Todo Has Been Successfully Deleted!')
                            setDisplayNotification(true)
                            setNotificationVariant('success')
                        }).catch(() => {
                            setNotificationMessage('An Error Occured While Deleting Todo')
                            setDisplayNotification(true)
                            setNotificationVariant('error')
                        })
    }

    useEffect(() => getTodoListByUsername(), [])

    return(
        <div 
            style={{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
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
                (
                    notificationMessage !== ERROR_MSG_LOADING_TODOLIST && 
                    <TodoList 
                        todoList={todoList} 
                        onDeleteTodoClick={handleDisplayPrompt} 
                    />
                )
            }
            <AppSnackbar
                toggleDisplay={displayNotification}
                notificationMessage={notificationMessage}
                notificationVariant={notificationVariant}
                onCloseNotification={() => setDisplayNotification(!displayNotification)} 
            />
            <AppPrompt 
                toggleDisplay={displayPrompt}
                promtMessage='Do you want to proceed?'
                onCloseClick={() => setDisplayPromt(!displayPrompt)}
                onConfirmClick={handleDeleteTodo}
            />
        </div>
    )
}

export default TodoContainer