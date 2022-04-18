import React from "react";

let Comp2=(props)=>{
    return <>
    <h2>Compb</h2>
    <pre>{JSON.stringify(props)}</pre>
    <p>property 1:(props.aData)</p>
    <p>property 2:(props.bData)</p>
    </>
}
export default  Comp2