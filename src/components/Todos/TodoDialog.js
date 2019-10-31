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
import AppHelpers from '../Utils/AppHelpers'

 const TodoDialog = ({...props}) => {
    const { displayTodoDialog, todoDialogData, onCloseClick, onConfirmClick } = props

    // const isEditMode = Object.keys(todoDialogData).length === 0

    const handleTodoFormSubmit = (data) => {
        let todoData = {}
        todoDialogData && todoDialogData.description ? todoData = {...data, id: todoDialogData.id} : todoData = data
        onConfirmClick(todoData)
    }

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

                <MuiDialogContent >
                    <Formik
                        initialValues={{ 
                            description: todoDialogData && todoDialogData.description ? todoDialogData.description : '', 
                            targetDate: todoDialogData && todoDialogData.targetDate ? AppHelpers.formatDate(todoDialogData.targetDate) : AppHelpers.formatDate(new Date())
                        }}
                        //add validation for fields - 
                        //description: required, min length 5
                        //date: required, valida date (use moment)
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => setSubmitting(false), 3 * 1000)
                            handleTodoFormSubmit(values)
                        }}
                    >
                        {
                            props => {
                                const { values, handleChange, handleBlur, isSubmitting } = props
                                return(
                                    <Form>

                                        <div 
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
                                        </div>
                                        
                                        <MuiDialogActions>
                                            <Button 
                                                onClick={onCloseClick} 
                                                color="secondary"
                                            >
                                                Cancel
                                            </Button>
                                            <Button 
                                                color="primary"
                                                disabled={isSubmitting}
                                                onClick={() => handleTodoFormSubmit(values)}
                                            >
                                                { todoDialogData && todoDialogData.description ? 'Save' : 'Create' }
                                            </Button>
                                        </MuiDialogActions>

                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </MuiDialogContent>

                
            </Dialog>
      </>
     )
 }

 export default TodoDialog