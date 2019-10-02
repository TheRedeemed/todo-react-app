import React, {useState} from 'react'
import { Formik, Form } from 'formik'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import * as Yup from 'yup'

const loginValidationSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('password is required')
})

const LoginForm = ({...props}) => {
    const [loginErrorMessage, setLoginErrorMessage] = useState('')
    return (
        <div>
            <h1>Login</h1>

            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    const {username, password} = values
                    setTimeout(() => setSubmitting(false), 3 * 1000)
                    //Temporary login validation
                    username !== 'Abdoul' || password !== 'password' ? setLoginErrorMessage('Invalid Credentials') : props.history.push(`/home/${username}`)
                }}
            >
                {
                    props => {
                        const { values, errors, touched, dirty, isSubmitting, isValid, handleReset, handleChange, handleBlur } = props

                        return (
                            <>
                            {loginErrorMessage && <div style={{ color : 'red'}}>{loginErrorMessage}</div>}
                            <Form>
                                <Card>

                                <TextField
                                    label='Username'
                                    name='username'
                                    type='text'
                                    placeholder='Enter Username Here'
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.username && touched.username}
                                    helperText={errors.username && touched.username && (<span style={{ color : 'red' }}>{errors.username}</span>)}
                                />

                                <br />

                                <TextField
                                    label='Password' 
                                    name='password'
                                    type='password'
                                    placeholder='Enter Password Here'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.password && touched.password}
                                    helperText={errors.password && touched.password && (<span style={{ color : 'red' }}>{errors.password}</span>)}
                                />

                                <div>
                                    <Button
                                        variant='contained'
                                        size='small'
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >
                                        Cancel
                                    </Button>
                                    &nbsp;
                                    &nbsp;
                                    <Button 
                                        variant='contained' 
                                        size='small'
                                        color='primary' 
                                        type='submit' 
                                        disabled={!isValid || isSubmitting}
                                    >
                                        Login
                                    </Button>
                                </div>
                                </Card>
                            </Form>
                        </>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default LoginForm