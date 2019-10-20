
const registerSucessfulLogin = (username, password) => {
    sessionStorage.setItem('authenticatedUser', username)
}

const removeItemFromSessionStorage = () => {
    sessionStorage.removeItem('authenticatedUser')
}

const getLoggedInUserName = () => {
    let userInfo = sessionStorage.getItem('authenticatedUser')
    return userInfo ? userInfo : ''
}

const AuthenticationService = {
    registerSucessfulLogin,
    removeItemFromSessionStorage,
    getLoggedInUserName
}

export default AuthenticationService