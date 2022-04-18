import {useDispatch, useSelector} from 'react-redux'
import {gmAction,gnAction} from './message.action'

let Message =()=>{
    let dispatch =useDispatch();
    let message=useSelector((state)=>{
        return state
    })

   

    let gmHandler=()=>{
        console.log("GM Handler-message view");
        dispatch(gmAction());
    }

    let gnHandler=()=>{
        console.log("Gn handler");
        dispatch(gnAction());

    }

    return <div>
        <h6>Message component</h6>
        <br/>
        <h4>Your msg::{message.msg}</h4>
        <pre>{JSON.stringify(message)}</pre>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>

}

export default Message