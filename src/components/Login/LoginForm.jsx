import React, {useState} from 'react'
import { Formik, Form } from 'formik'
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
                    username !== 'Abdoul' || password !== 'password' ? setLoginErrorMessage('Invalid Credentials') : props.history.push(`/welcome/${username}`)
                }}
            >
                {
                    props => {
                        const { values, errors, touched, dirty, isSubmitting, handleReset, handleChange, handleBlur } = props

                        return (
                            <>
                            {loginErrorMessage && <div style={{ color : 'red'}}>{loginErrorMessage}</div>}
                            <Form>
                                <div>
                                    <label htmlFor='username'>Username</label>
                                    <div>
                                        <input
                                            name='username'
                                            type='text'
                                            placeholder='Enter Username'
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.username && touched.username && (<div style={{ color : 'red' }}>{errors.username}</div>)}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor='password'>Password</label>
                                    <div>
                                        <input
                                            name='password'
                                            type='password'
                                            placeholder='Enter Password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password && (<div style={{ color : 'red' }}>{errors.password}</div>)}
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type='reset'
                                        value='Reset'
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    />
                                    &nbsp;
                                    <input
                                        type='submit'
                                        value='Login'
                                        disabled={isSubmitting}
                                    />
                                </div>
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