import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { Formik, Form } from 'formik'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'

 const TodoDialog = ({...props}) => {
    const { displayTodoDialog, onCloseClick, todoDialogData } = props

     return(
         <>
            <Dialog 
                fullWidth
                onClose={onCloseClick} 
                aria-labelledby="customized-dialog-title" 
                open={displayTodoDialog}
            >   
                <MuiDialogTitle>
                    <span 
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}
                    >
                        <h3>{ todoDialogData && todoDialogData.description ? todoDialogData.description : "New Todo"}</h3>
                        <IconButton aria-label="close" onClick={onCloseClick}>
                            <CloseIcon />
                        </IconButton>
                    </span>
                </MuiDialogTitle>

                <MuiDialogContent dividers>
                    <Formik
                        initialValues={{ 
                            description: todoDialogData && todoDialogData.description ? todoDialogData.description : '', 
                            targetDate: todoDialogData && todoDialogData.targetDate ? moment(todoDialogData.targetDate).format('YYYY-MM-DD') : moment(new Date()).format('YYYY-MM-DD') 
                        }}
                    >
                        {
                            props => {
                                const { values, handleChange, handleBlur } = props
                                return(
                                    <Form
                                        style={{
                                            display: 'flex',
                                            flexFlow: 'column',
                                            alignItems: 'center',
                                            margin: '50px'
                                        }}
                                    >
                                        <TextField
                                            label='Description' 
                                            name='description'
                                            type='text'
                                            placeholder='Enter Todo Description Here'
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                margin: '25px',
                                                width: '100%'
                                            }}
                                        />
                                        
                                        <TextField
                                            label='Target Date' 
                                            name='targetDate'
                                            type='date'
                                            placeholder='Enter Target Date Here'
                                            value={values.targetDate}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={{
                                                margin: '25px',
                                                width: '100%'
                                            }}
                                        />

                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </MuiDialogContent>

                <MuiDialogActions>
                    <Button onClick={onCloseClick} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={onCloseClick} color="primary">
                        Create
                    </Button>
                </MuiDialogActions>
            </Dialog>
      </>
     )
 }

 export default TodoDialog