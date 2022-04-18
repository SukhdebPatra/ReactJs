import React from "react";
import C4 from './C4'

let C3=()=>{
    let Name="Sukhdeb Patra"
   let add ="Bandhpara , Chaibasa west singhbhum"
   let state='Jharkhaand, pin= 833201'
   let Phone=7903845176




    return <>
    <h2>C3 component</h2>
    <p>Name={Name}</p>
    <p>Add={add}</p>
    <p>State={state}</p>
    <p>Phone={Phone}</p>
    <hr/>
    <C4 Name={Name} Add={add} State={state} Phone={Phone}/>


    </>
}

export default C3