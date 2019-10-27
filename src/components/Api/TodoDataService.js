import Axios from "axios"
import AuthenticationService from '../Services/AuthenticationService'

const username = AuthenticationService.getLoggedInUserName()

const getAllTodosByUsername = () => {
    return Axios.get(`http://localhost:8080/users/${username}/todos`)
}

const deleteTodoById = (todoId) => {
    return Axios.delete(`http://localhost:8080/users/${username}/todos/${todoId}`)
}

const TodoDataService = {
    getAllTodosByUsername,
    deleteTodoById
}

export default TodoDataService