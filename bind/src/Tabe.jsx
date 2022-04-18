import React from "react";
import { Component } from "react";


 class Tabe extends React.Component {
emp=[{id:101,name:"raj sharma",salary:45000},
{id:102,name:"rohit verma",salary:60000},
{id:103,name:"sukhdeb",salary:89999}
]

  render(){
    return(
      <div className="container mt-5" >
        <div className="row">
<div className="col md-4">
<div className="table table-hover">
<div className="thead bg-secondary">
  <th>Id</th>
  <th>Name</th>
  <th>Salary</th>
  </div>
  
    <div className="tbody">
    {this.emp.map((emp)=>{
      return (
        <tr><td>{emp.id} </td>
        <td>{emp.name}</td>
        <td>{emp.salary}</td>
        </tr>
        
       
      )
    })}
    
    </div>
  
</div>
</div>

        </div>
      </div>
    )
  }
}

export default Tabe;
