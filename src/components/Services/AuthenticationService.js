
const registerSucessfulLogin = (username, password) => {
    sessionStorage.setItem('authenticatedUser', username)
}

const removeItemFromSessionStorage = () => {
    sessionStorage.removeItem('authenticatedUser')
}

const AuthenticationService = {
    registerSucessfulLogin,
    removeItemFromSessionStorage
}

export default AuthenticationService