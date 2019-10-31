import React, {useState, useEffect} from 'react'
import AppCircularLoader from '../Utils/AppCicularLoader'
import AppSnackbar from '../Utils/Notification/AppSnackbar' 
import AppPrompt from '../Utils/Notification/AppPrompt'
import AddIcon from '@material-ui/icons/Add'
import TodoDataService from '../Api/TodoDataService'
import TodoList from './TodoList'
import TodoDialog from './TodoDialog'

const TodoContainer = () => {
    const [loadingMessage, setLoadingMessage] = useState(true)
    const [displayNotification, setDisplayNotification] = useState(false)
    const [notificationVariant, setNotificationVariant] = useState('')
    const [notificationMessage, setNotificationMessage] = useState('')
    const [displayPrompt, setDisplayPromt] = useState(false)
    const [promptConfirmValue, setPromptConfirmValue] = useState(null)
    const [displayTodoDialog, setDisplayTodoDialog] = useState(false)
    const [todoDialogData, setTodoDialogData] = useState({})
    const [todoList, setTodoList] = useState([])

    const ERROR_MSG_LOADING_TODOLIST = 'An Error Occured While Loading Todo List'

    const handleCreateTodo = (todoData) => {
        TodoDataService.createTodo(todoData)
                        .then((response) => {
                            setTodoList([...todoList, response.data])
                            setDisplayTodoDialog(!displayTodoDialog)
                            setNotificationMessage('Todo Has Been Successfully Created!')
                            setDisplayNotification(true)
                            setNotificationVariant('success')
                        }).catch((error) => {
                            setDisplayTodoDialog(!displayTodoDialog)
                            setNotificationMessage('An Error Occured Creating New Todo')
                            setDisplayNotification(true)
                            setNotificationVariant('error')
                        })
    }
    
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

    const handleUpdateTodo = (todoData) => {
        TodoDataService.updateTodo(todoData.id, todoData)
                        .then((response) => {
                            setTodoList([...todoList, response.data])
                            setDisplayTodoDialog(!displayTodoDialog)
                            setNotificationMessage('Todo Has Been Successfully Updated!')
                            setDisplayNotification(true)
                            setNotificationVariant('success')
                        }).catch(() => {
                            setDisplayTodoDialog(!displayTodoDialog)
                            setNotificationMessage('An Error Occured Updating Todo')
                            setDisplayNotification(true)
                            setNotificationVariant('error')
                        })
    }

    const handleDeleteTodo = () => {
        const todoId = promptConfirmValue
        setDisplayPromt(!displayPrompt)
        TodoDataService.deleteTodo(todoId)
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

    const handleDisplayPrompt = (todoId) => {
        setDisplayPromt(!displayPrompt)
        setPromptConfirmValue(todoId)
    }

    const handleDisplayTodoDialog = (todoObj) => {
        // console.log(todoObj)
        setDisplayTodoDialog(!displayTodoDialog)
        setTodoDialogData(todoObj)
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
                        onEditTodoClick={handleDisplayTodoDialog}
                        onDeleteTodoClick={handleDisplayPrompt} 
                    />
                )
            }

            <AddIcon 
                style={{
                    border: '1px solid #FFF',
                    borderRadius: '100px',
                    padding: '5px',
                    fontSize: '50px',
                    backgroundColor: '#3f51b5',
                    color: '#FFF',
                    position: 'absolute',
                    right: '50px',
                    bottom: '50px'
                }} 
                onClick={handleDisplayTodoDialog}
            />

            <TodoDialog 
                displayTodoDialog={displayTodoDialog} 
                todoDialogData={todoDialogData}
                onCloseClick={() => setDisplayTodoDialog(!displayTodoDialog)}
                onConfirmClick={todoDialogData && todoDialogData.description ? handleUpdateTodo : handleCreateTodo }
            />
            
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