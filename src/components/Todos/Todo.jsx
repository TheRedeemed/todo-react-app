import React from 'react'
import Card from '@material-ui/core/Card'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import AppHelpers from '../Utils/AppHelpers'

const Todo = ({...props}) => {
    const { id, description, done, targetDate, onEditTodoClick, onDeleteTodoClick } = props

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
                flexFlow: 'column',
                width: '325px'
            }}>
                <span>
                    <span style={{ fontWeight: 'bold' }}>Description: </span>{description}
                </span>
                <span>
                    <span style={{ fontWeight: 'bold' }}>Is Done: </span> {done.toString()}
                </span>
                <span>
                    <span style={{ fontWeight: 'bold' }}>Target Date:</span> {AppHelpers.formatDate(targetDate)}
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
                <Edit onClick={() => onEditTodoClick({ id, description, done, targetDate })} />
                <Delete onClick={() => onDeleteTodoClick(id)} />
            </div>
        </Card>
    )
}

export default Todo