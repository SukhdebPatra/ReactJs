import React from "react";
import CompB from "./CompB";

function CompA(){

    let a=100;
    let b=200;
return (
    <>
   
    <h1>Component A</h1>

    <CompB props1={a} props2={b}/>
    </>

    )

}
export default CompA