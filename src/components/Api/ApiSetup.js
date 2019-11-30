import axios from 'axios'
import AuthenticationService from '../Services/AuthenticationService'
import {API_PATH_BASE} from '../Utils/AppConstants'


const request = axios.create({
    baseURL: API_PATH_BASE
})

request.interceptors.request.use(config => {
    console.log('ApiSetup - Axios Interceptor')
    const currentUser = AuthenticationService.getLoggedInUser()
    if(currentUser.userName) {
        config.headers.Authorization = currentUser.userToken
    }
    return config
}, err => {
    console.log(err)
    return Promise.reject(err)
})

export default request