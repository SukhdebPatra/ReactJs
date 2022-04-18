import React from 'react'
import { useState,useEffect } from 'react'

const ResponsiveDwawer = (props) => {

    const[formData,setformData]=useState([])
    const [showBox,setshowBox]=useState(false)
    const [details,setdetails]=useState([])


    const geData=(data)=>{
        setformData([...formData,data])
    }

    const getDetails=(data)=>{
        setdetails(data)
    }

    useEffect(()=>{

    },details)

  return (
  <>
   <div className='container-fluid'>
      <div className='row p-2 bg-dark'>
        <div className='col'>
          <div className='gutter-gap'>
            <h3 className='text-center text-white'>GITHUB BROWSER</h3>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
      <div className='row'>
        {
          formData.length>0?
          <div className='col-3 bg-light py-3'>
          <div className='gutter-gap'>
            <ul className='list-group'>
              {
                formData.map((elem,index)=>{
                  return <li key={index} className='list-group-item' style={{cursor:'pointer'}}
                  onClick={()=>getDetails(elem)}>{elem.name}</li>
                })
              }
        
            </ul>
          </div>
        </div>:<div className='col-3 bg-light py-3'>
          <div className='gutter-gap'>
            <ul className='list-group'>
              <li className='list-group-item'>Repository Name 0</li>
            </ul>
          </div>
        </div>
        }
        <div className='col-9'>
          <div className='gutter-gap text-end mt-4'>
            <button className='btn btn-primary'
            onClick={()=>{
              setformData([])
              setdetails([])
            }}>Delete</button>
          </div>
          <div className='repo-details'>
           
          </div>
        </div>
      </div>
    </div>
    <div className='showmodal-btn'>
        <i className="bi bi-plus-circle-fill" 
        onClick={()=>setshowBox(!showBox)}></i>
    </div>
 
     
  </>
  )
}

export default ResponsiveDwawer