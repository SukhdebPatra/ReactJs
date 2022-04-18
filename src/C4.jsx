import React from "react";
let C4 =(props)=>{

    return <>
    <h1>C4 Component</h1>
    <pre>{JSON.stringify(props)}</pre>
    <p>Name={props.Name}</p>
    <p>Address={props.Add}</p>
    <p>State={props.State}</p>
    <p>Phone={props.Phone}</p>

    </>

}

export default C4