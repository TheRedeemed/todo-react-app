import React, {useState} from 'react'
import TodoList from '../Todos/TodoList'
import HelloMessageService from '../Api/HelloMessageService'

const WelcomePage = ({...props}) => {
    const { match } = props
    const [msg, setMsg] = useState('')

    const retireveMessage = () => {
        // HelloMessageService.executeHelloMessageService()
        //                     .then(response => setMsg(response.data))

        // HelloMessageService.executeHelloBeanService()
        //                     .then(response => setMsg(response.data.helloBean))

        HelloMessageService.executeHelloBeanPathVarService(match.params.username)
                            .then(response => setMsg(response.data.helloBean))
                            .catch(error => console.log(error.response.data.message))
    }
    
    return (
        <>
            <h1>Welcome {match.params.username}</h1>
            <TodoList />
            <div>
                Click to get some message
                <button onClick={() => retireveMessage()}>Get Message</button>
            </div>
            <div>
                {msg}
            </div>
        </>
    )
}

export default WelcomePage