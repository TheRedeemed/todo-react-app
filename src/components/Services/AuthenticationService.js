
import Axios from 'axios'

const createBasicAuth = (username, password) => 'Basic ' + window.btoa(username + ":" + password)     //create basic encoded username and password

const executeBasicAuthentication = (username, password) => {
    return Axios.get('http://localhost:8080/basicauth', 
                        {
                            headers: {
                                authorization: createBasicAuth(username, password)
                            }
                        }
                    )
}

const registerSucessfulLogin = (username, password) => {
    sessionStorage.setItem('authenticatedUser', username)
    setupAxiosInterceptors(createBasicAuth(username, password))    //Calling the axios interceptor at the time of login
}

const removeItemFromSessionStorage = () => {
    sessionStorage.removeItem('authenticatedUser')
}

const isUserLoggedIn = () => sessionStorage.getItem('authenticatedUser') ? true : false

const getLoggedInUserName = () => {
    let userInfo = sessionStorage.getItem('authenticatedUser')
    return userInfo ? userInfo : ''
}

//This interceptor is used to setup the credentials that needs to be added to the header for every call to the back end
const setupAxiosInterceptors = (basicAuthHeader) => {
    Axios.interceptors.request.use((config) => {
        if(isUserLoggedIn()) {
            config.headers.authorization = basicAuthHeader
            sessionStorage.setItem('authorization', basicAuthHeader)
        }
        return config
    })
}

const AuthenticationService = {
    executeBasicAuthentication,
    registerSucessfulLogin,
    removeItemFromSessionStorage,
    isUserLoggedIn,
    getLoggedInUserName
}

export default AuthenticationService