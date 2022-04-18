import React,{useState} from 'react'

let Producta=()=>{
    let [product,setProduct]=useState({
        name:'real me',
        price:10000,
        qty:1,
        image:'https://rukminim1.flixcart.com/image/416/416/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70'
    })

    let decrHandler=()=>{
        setProduct({...product,qty:product.qty-1})

    }

    let incrHandler=()=>{
        setProduct({...product,qty:product.qty+1})
    }

   return <>
   <div className="container">
       <div className="row">
           <div className="col-md-8">
               <table className='text-white table bg-dark'>
                   <thead className='text-white' >
                       <th>Product Name</th>
                       <th>Price</th>
                       <th>QTY</th>

                       
                       <th>Image</th>
                       <th>Total Price</th>
                   </thead>
                  <tbody>
                      <tr><td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.price * product.qty}</td>
             <td><img src={product.image}alt='' width={50} height={100}/></td>
                    
                      </tr>
                  </tbody>
               </table>
           </div>
       </div>
   </div>
   </>

}

export default Producta