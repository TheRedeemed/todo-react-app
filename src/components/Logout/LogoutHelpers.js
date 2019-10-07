import AuthenticationService from '../Services/AuthenticationService'

const logout = () => {
    AuthenticationService.removeItemFromSessionStorage()
}

const LogoutHelpers = {
    logout
}

export default LogoutHelpers