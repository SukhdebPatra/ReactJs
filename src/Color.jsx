

import {useState} from 'react'

let Color=()=>{
    const[color,setColor]=useState("Blue");

    return(
        <>
        <h1 style={{color:'lightgreen',padding:'20px',border:'groove',textAlign:'center'}}>My fav color is {color}</h1>
        
        <button type="button"onClick={()=>setColor("Red")}>Red</button>

        <button type="button"  onClick={()=>setColor("Blue")}>Blue</button>

        <button type='button'  onClick={()=>setColor("Green")}>Green</button>
        <button type='button' onClick={()=>setColor("Pink")}>Pink</button>

        </>
    )
}
let Color2=()=>{
    const[oldcolor,setOldColor]=useState('Yellow')
    return (
        <>
        <h2 style={{color:'lime', border:'groove',margin:'40px 30px',padding:'20px',textAlign:'center' }}>My New fav color is {oldcolor}</h2>

        <button className='btn btn-primary btn-sm'  type='button'onClick={()=>setOldColor("Blue")}>Blue</button>
        <button className='btn btn-danger btn-sm' type='button' onClick={()=>setOldColor("Red")}>Red</button>
        </>
    )
}

let Color3=()=>{
    const[brand,setBrand]=useState("ford");
    const[model,setModel]=useState('mustang');
    const[year,setYear]=useState("1964");
    const[color,setColor]=useState("limered");

    return (
        <>
        <h1 className='text-danger'>My {brand}</h1>
        <h2 className='text-primary'>My car Details  {model} {color} {year} </h2>
        </>
    )
}

let Car=()=>{
    const [car,setCar]=useState({
        Brand:'Ford',
        model:'Mustang',
        year:'1964',
        color:'Blue'
    });
    
    const updateBrand=()=>{
        setCar(previousState=>{
            return{...previousState,Brand:'Lambo'}
        })
    }

    return(
        <>
        <h1>My {car.Brand}</h1>
        <button className='btn-primary' type='button' onClick={updateBrand}>Lambo</button>
        </>
    )
}

let FavColor=()=>{
    const[Color,setColor]=useState("Black")
    
return<>
 <h1 style={{color:'red',background:'Tomato'}}>My fav color is {Color}</h1>
 <button className='btn-danger'disabled type='button' onClick={()=>setColor("Red")}>Red</button>
 <button className='btn-outline-primary' type='button' onClick={()=>setColor('Blue')}>Blue</button>

</>
}

let Car1=()=>{
    const[car,setCar]=useState({
Brand:'Ford',
model:'mustang',
year:'1994',
color:'Blue'
    })

    const updateCarName=()=>{
        setCar(previousState=>{
            return {...previousState,Brand:"LAMBO",year:'2000'}
        })
    }
  
    const updateColor=()=>{
        setCar(previescolor=>{
            return {
                ...previescolor,color:'Green'
            }
        })
    }
    return <>
    <h1 style={{background:'lightblue'}}> MY {car.Brand} {car.year} </h1>
    <h2>car color {car.color}</h2>
    <button className='btn-outline-info' onClick={updateCarName} >Change name</button>
<button className='btn-outline-danger'onClick={updateColor}>Color Change</button>


    </>
}



export  {Color,Color2,Color3,Car,FavColor,Car1}
