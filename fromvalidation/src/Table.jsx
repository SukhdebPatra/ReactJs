import React, { useState,useEffect } from 'react'

const Table = () => {
    const [name,setName]=useState('');
    const[email,setEmail]=useState('');
    const [number,setNumber] = useState("");
    const [project,setProject] = useState("");
    const [start,setStart] = useState("");
    const [finish,setFinish] = useState("");
    const [planned,setPlaned] = useState("");
    const [id,setId] =useState(0)
    const [tableData, setTableData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);
    const [toShow,settoShow] = useState([]);
    const [tab,setTab] = useState("Planned");

    const saveData=(e)=>{
        e.preventDefault();
        setId(id+1)
        console.log(planned);
    }

 


  return (
   <>
   <div className="container">
       <div className="row">
           <div className="col">
               <form action=''onSubmit={saveData}>
                   <input type="text" placeholder='Enter your name'/><br/>
                   <input type='email' placeholder='Enter your Email'/><br/>
                   <input type="text" placeholder='Enter Project Name'/><br/>
                   <input type="text" placeholder='Enter Task description'/><br/>
                   <input type="date" placeholder='Start Date'/><br/>
                   <input type="date" placeholder='Start Date'/><br/>
                   <input type='radio'/>

                   <div className="row">
                                 <button className='mt-4 btn btn-primary' type="submit">save</button>
                   <button className='mt-4 ml-4 btn btn-danger' type="reset">clear</button>
                  </div>
               </form>
               </div>
               </div>
       </div>
   
   </>
  )
}

export default Table