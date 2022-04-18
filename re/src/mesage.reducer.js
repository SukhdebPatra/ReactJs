import { GM,GN } from "./message.action";

let initialState={
    msg:"Hello ......Luci"
}

let messageReducer=(state=initialState,action)=>{
    console.log("message reducer ",action.type)
    switch (action.type){
        case GM:
            return {msg:'GOOD MORNING'}
        case GN:
            return{msg:'GOOD NIGHT'}
            default:
                return state
    
        }
    
}
export{messageReducer}