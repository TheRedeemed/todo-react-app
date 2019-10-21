import Axios from "axios"

const getAllTodosByUsername = (username) => {
    return Axios.get(`http://localhost:8080/users/${username}/todos`)
}

const TodoDataService = {
    getAllTodosByUsername
}

export default TodoDataService