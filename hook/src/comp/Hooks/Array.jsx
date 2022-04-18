import React, {useState} from 'react'


const Array = () => {


  const uData = [
    { id: 0, name: 'sukhdeb', age: 26 },
    {
      id: 1, name: 'Beena', age: 26
    }
  ]
 
  const [myState, setMyState] = useState(uData);

  const Delete=()=>{
    setMyState([]);
  }


  return (
    <>
      <h1>this</h1>
      {
        uData.map((cur) => {
          return <h1 key={cur.id}>This is my Name {cur.name}  and age is {cur.age}</h1>
        })
      }

      <button className='btn btn-primary' onClick={Delete}>Clare</button>

    </>
  )
}

export default Array