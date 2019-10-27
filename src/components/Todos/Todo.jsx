import React from 'react'
import Card from '@material-ui/core/Card'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const Todo = ({...props}) => {
    const { id, description, done, targetDate, onDeleteTodoClick } = props
    return(
        <Card style={{
            display: 'flex',
            flexFlow: 'row',
            width: '20%',
            margin: '15px',
            padding: '15px'
        }}>
            <div style={{
                display: 'flex',
                flexFlow: 'column'
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
            </div>
            <div style={{
                height: 'fit-content',
                width: '16%',
                display: 'flex',
                flexFlow: 'row',
                justifyContent: 'space-between',
                cursor: 'pointer'
            }}>
                <Edit />
                <Delete onClick={() => onDeleteTodoClick(id)} />
            </div>
        </Card>
    )
}

export default Todo