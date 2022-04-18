import {GM,GN} from './Message.action'


let initialState={
    msg: "Lucifer is devil......luci"
}

let messageReducer =(state =initialState, action)=>{
    console.log('Message Reducer -redux reducer', action.type)

    switch (action.type){
        case GM:
            return {msg:"GOOD MORNING"}
            case GN:
                return {msg:"GOOD NIGHT"}

                default :
                return state
    }
}

export {messageReducer}