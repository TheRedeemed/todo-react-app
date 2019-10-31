import Axios from "axios"
import AuthenticationService from '../Services/AuthenticationService'

const username = AuthenticationService.getLoggedInUserName()

const getAllTodosByUsername = () => {
    return Axios.get(`http://localhost:8080/users/${username}/todos`)
}

const createTodo = (todo) => {
    return Axios.post(`http://localhost:8080/users/${username}/todo`, todo)
}

const updateTodo = (todoId, todo) => {
    return Axios.put(`http://localhost:8080/users/${username}/todo/${todoId}`, todo)
}

const deleteTodo = (todoId) => {
    return Axios.delete(`http://localhost:8080/users/${username}/todo/${todoId}`)
}

const TodoDataService = {
    getAllTodosByUsername,
    deleteTodo,
    updateTodo,
    createTodo
}

export default TodoDataService