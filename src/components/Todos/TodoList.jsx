import React from 'react'
import Todo from './Todo'

const TodoList = () => {
    const todoList = [
        {
            id: 1,
            description: 'Learn React',
            done: false,
            targetDate: new Date()
        },
        {
            id: 2,
            description: 'Learn Java',
            done: false,
            targetDate: new Date()
        },
        {
            id: 3,
            description: 'Learn Groovy',
            done: false,
            targetDate: new Date()
        },
        {
            id: 4,
            description: 'Learn Spring Boot',
            done: false,
            targetDate: new Date()
        },
        {
            id: 5,
            description: 'Learn Hibernate',
            done: false,
            targetDate: new Date()
        }
    ]
    return(
        <div>
            <h1>Todo List</h1>
            {
                todoList.map(todo => <Todo 
                                        key={todo.id}
                                        description={todo.description}
                                        done={todo.done}
                                        targetDate={todo.targetDate}
                                     />
                            )
            }
        </div>
    )
}

export default TodoList