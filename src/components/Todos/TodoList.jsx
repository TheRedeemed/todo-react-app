import React from 'react'
import Todo from './Todo'

const TodoList = ({...props}) => {
    const { todoList, onDeleteTodoClick } = props

    return(
        <div style={{
            display: 'flex',
            flexFlow: 'wrap'
        }}> 
            {
                todoList.length === 0 ?
                <p>Your Todolist is empty</p> //Need to display this better
                :
                todoList.map(todo => <Todo 
                                        key={todo.id}
                                        id={todo.id}
                                        description={todo.description}
                                        done={todo.done}
                                        targetDate={todo.targetDate}
                                        onDeleteTodoClick={onDeleteTodoClick}
                                    />
                            )
            }
        </div>
    )
}

export default TodoList