
import {  gnAction, gmAction } from './Message.action'
import { useDispatch, useSelector } from 'react-redux'

let Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state
    })


    let gmHandler = () => {
        console.log("gm Handler-message view")
        // dispatch an action

        dispatch(gmAction());
    }
let msg ="Hello"
    let gnHandler = () => {
        //dispatch an action
        dispatch(gnAction());
    }
    return <>
    <h6>Message Component</h6>
    <br/><br/>
    <br/>
    <h4>Your Message:{Message.msg}</h4>
    <pre>{JSON.stringify(message)}</pre>
    <button onClick={gmHandler}>GM</button>
    <button onClick={gnHandler}>GN</button>
    </>

}

export  default Message