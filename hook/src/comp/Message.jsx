import React,{useState} from 'react'

let Message =()=>{
    let [msg,setmsg]=useState("luci...");

    return <>
    <h2>Message Comp::{msg}</h2>
    <button onClick={()=>{setmsg("Hello Good Morning")}}>GOOD MORNING</button>
    <button onClick={()=>{setmsg("Hello Good Night")}}>GOOD NIGHT</button>
    </>
}

export default Message