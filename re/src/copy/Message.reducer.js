import { GN,GM } from "./Message.action";

let initialState={
    msg:"Lucifer......Devil"
}

let messageReducer=(state=initialState,action)=>{
    console.log("Message Reducer - redux reducer",action.type)
    switch(action.type){
        case GM:
            return{msg:"Good Morning"}
        case GN:
            return {msg:"Good Night"}
            default:
                return state
    }
}

export {messageReducer}