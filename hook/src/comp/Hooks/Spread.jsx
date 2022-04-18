import React,{useState} from 'react'


export const Spread = () => {
   
    const [object, setObject]=useState(
        { name: 'Sukhdeb', age: 26 }

    );

    const changeObject=()=>{
        setObject({...object,name:'dukhdeb'})

    }
     

  return (
   <>
   <div>Spread</div>
   <h1>{object.name} or {object.age} </h1>

   <button className='btn btn-primary' onClick={changeObject}>Update</button>
   </>
  )
}
