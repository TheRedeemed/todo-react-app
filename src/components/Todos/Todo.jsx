import React from 'react'
import Card from '@material-ui/core/Card'

const Todo = ({...props}) => {
    const { description, done, targetDate } = props
    return(
        <Card style={{
            display: 'flex',
            flexFlow: 'column',
            width: '20%',
            margin: '15px',
            padding: '15px'
        }}>
            <span>
                <span style={{ fontWeight: 'bold' }}>Description: </span>{description}
            </span>
            <span>
                <span style={{ fontWeight: 'bold' }}>Is Done: </span> {done.toString()}
            </span>
            <span>
                <span style={{ fontWeight: 'bold' }}>Target Date:</span> {targetDate.toString()}
            </span>
        </Card>
    )
}

export default Todo