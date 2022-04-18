import React from "react";
import Comp2 from './Comp2'

let Comp1=()=>{
let a=20;
let  b=60;
return <>
<h1>Comp1</h1>
<p>A={a}</p>
<p>B={b}</p>
<hr/>
<Comp2 aData={a} bData={b}/>

    </>


}

export default Comp1