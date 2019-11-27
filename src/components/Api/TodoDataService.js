import Axios from "axios"
import AuthenticationService from '../Services/AuthenticationService'
import {API_PATH_USER} from '../Utils/AppConstants'

const username = AuthenticationService.getLoggedInUserName()

const getAllTodosByUsername = () => {
    return Axios.get(`${API_PATH_USER}${username}/todos`)
}

const createTodo = (todo) => {
    return Axios.post(`${API_PATH_USER}${username}/todo`, todo)
}

const updateTodo = (todoId, todo) => {
    return Axios.put(`${API_PATH_USER}${username}/todo/${todoId}`, todo)
}

const deleteTodo = (todoId) => {
    return Axios.delete(`${API_PATH_USER}${username}/todo/${todoId}`)
}

const TodoDataService = {
    getAllTodosByUsername,
    deleteTodo,
    updateTodo,
    createTodo
}

export default TodoDataService