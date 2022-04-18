import React,{useState} from "react";

let Product=()=>{
    let [product,setProduct]=useState({
        name:"iphone 12",
        price:45000,
        qty:2,
        image:""
    })

    let decrHandler=()=>{
        setProduct({...product, qty:product.qty-1})
    }
    let incrHandler=()=>{
        setProduct({...product, qty:product.qty+1})
    }

    return <>
    <h2>Product Name:{product.name}</h2>
    <h2>Product Price:{product.price}</h2>
    <h2>Qty:{product.qty}</h2>
    <h3>Total Price:{product.price * product.qty}</h3>

    <button onClick={decrHandler} >Decr</button>
    <span >{product.qty}</span>
    <button onClick={incrHandler}>INCR</button>
    </>
    
}


export default Product