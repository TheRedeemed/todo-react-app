import Axios from 'axios'
import {
    USER_NAME_SESSION_ATTRIBUTE_NAME,
    USER_AUTHORIZATION_ATTRIBUTE,
    API_PATH_BASE
} from '../Utils/AppConstants'

const createBasicAuth = (username, password) => 'Basic ' + window.btoa(username + ":" + password)     //create basic encoded username and password

const executeBasicAuthentication = (username, password) => {
    return Axios.get(`${API_PATH_BASE}basicauth`, 
                        {
                            headers: {
                                authorization: createBasicAuth(username, password)
                            }
                        }
                    )
}

const executeJwtAuthentication = (username, password) => {
    return Axios.post(`${API_PATH_BASE}authenticate`, 
                        {
                            username,
                            password
                        }
                    )
}

const registerSucessfulLogin = (username, password) => {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    setupAxiosInterceptors(createBasicAuth(username, password))    //Calling the axios interceptor at the time of login
}

const registerSucessfulLoginForJwt = (username, token) => {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    setupAxiosInterceptors(createJwtAuth(token))    //Calling the axios interceptor at the time of login
}

const createJwtAuth = token => 'Bearer ' + token

const removeItemFromSessionStorage = () => {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    sessionStorage.removeItem(USER_AUTHORIZATION_ATTRIBUTE)
}

const isUserLoggedIn = () => sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) ? true : false

const getLoggedInUserName = () => {
    let userInfo = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    return userInfo ? userInfo : ''
}

//This interceptor is used to setup the credentials that needs to be added to the header for every call to the back end
const setupAxiosInterceptors = (token) => {
    Axios.interceptors.request.use((config) => {
        if(isUserLoggedIn()) {
            config.headers.authorization = token
            sessionStorage.setItem(USER_AUTHORIZATION_ATTRIBUTE, token)
        }
        return config
    })
}

const AuthenticationService = {
    executeBasicAuthentication,
    registerSucessfulLogin,
    removeItemFromSessionStorage,
    isUserLoggedIn,
    getLoggedInUserName,
    executeJwtAuthentication,
    registerSucessfulLoginForJwt
}

export default AuthenticationService