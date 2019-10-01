import React from 'react'

const Todo = ({...props}) => {
    const { description, done, targetDate } = props
    return(
        <div>
            <span>{description} | </span>
            <span>{done.toString()} | </span>
            <span>{targetDate.toString()}</span>
        </div>
    )
}

export default Todo