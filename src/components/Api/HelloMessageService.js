import Axios from "axios"

const executeHelloMessageService = () => {
    // console.log('Calling executeHelloMessageService')
    return Axios.get('http://localhost:8080/hello')
}

const executeHelloBeanService = () => {
    // console.log('Calling executeHelloMessageService')
    return Axios.get('http://localhost:8080/helloBean')
}

const executeHelloBeanPathVarService = (name) => {
    // console.log('Calling executeHelloMessageService')
    return Axios.get(`http://localhost:8080/helloBeanPathVar/${name}`)
}

const HelloMessageService = {
    executeHelloMessageService,
    executeHelloBeanService,
    executeHelloBeanPathVarService
}

export default HelloMessageService