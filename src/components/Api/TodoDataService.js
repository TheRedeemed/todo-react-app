import request from './ApiSetup'
import AuthenticationService from '../Services/AuthenticationService'
import {API_PATH_USER} from '../Utils/AppConstants'

const getAllTodosByUsername = () => {
    return request.get(`${API_PATH_USER}${AuthenticationService.getLoggedInUser().userName}/todos`)
}

const createTodo = (todo) => {
    return request.post(`${API_PATH_USER}${AuthenticationService.getLoggedInUser().userName}/todo`, todo)
}

const updateTodo = (todoId, todo) => {
    return request.put(`${API_PATH_USER}${AuthenticationService.getLoggedInUser().userName}/todo/${todoId}`, todo)
}

const deleteTodo = (todoId) => {
    return request.delete(`${API_PATH_USER}${AuthenticationService.getLoggedInUser().userName}/todo/${todoId}`)
}

const TodoDataService = {
    getAllTodosByUsername,
    deleteTodo,
    updateTodo,
    createTodo
}

export default TodoDataService