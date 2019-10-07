import AuthenticationService from '../Services/AuthenticationService'

const isUserLoginValid = (username, password) => {
    let isUserValid = false
    if (username === 'Abdoul' && password === 'password') {
        isUserValid = true
        AuthenticationService.registerSucessfulLogin(username, password)
    }
    return isUserValid
}

const LoginHelpers = {
    isUserLoginValid
}

export default LoginHelpers