import { useDispatch, useSelector } from "react-redux"
import { gmAction, gnAction } from "./Message.action";

let Message =()=>{
    let dispatch=useDispatch();
    let message=useSelector((state)=>{
        return state
    })

  

    let gmHandler=()=>{
        console.log("GM Handler-Message view");
        //dispatch an action
        dispatch(gmAction());
    }
    let gnHandler=()=>{
        //dispatch an action
        dispatch(gnAction());
    }
    return <div>
        <h6>Message Component</h6>
        <br/> <br/> <br/>
        <h4>Your Message:{message.msg}</h4>
        <pre>{JSON.stringify(message)}</pre>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
}

export default Message