import { useState } from "react";

import NoteContext from "./NoteContext";

const NoteState=(props)=>{
const s1={
    name:"sukhdeb",
    class:'10th'
}
const [state,setState]=useState(s1);

let  updateState=()=>{
    setTimeout(()=>{
        setState({
            name:'Beena',
            class:"12th"
        },5000);
    })
}



return <>
<NoteContext.Provider value={{s1,state,updateState}}>
    {props.children}
</NoteContext.Provider>

</>

}

export default NoteState