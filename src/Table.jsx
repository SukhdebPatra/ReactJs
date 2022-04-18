import React, { Component } from 'react';

class Table extends Component {
emp=[{id:1,Name:"Sukhdeb Patra",Salary:40000},
{id:2,Name:"Shekhar Sarma",Salary:30000},
{id:3,Name:"Beena Patra",Salary:70000},
{id:4,Name:"Shikha thakurain",Salary:10000},{id:5,Name:"Sukhdeb Patra",Salary:40000}]

  render() {
    return <>
    <div className="container-mt-5">
        <div className="row">
            <div className="col md-4">
<div className="table table-hover">
    <div className="thead bg-secondary">
        <th>ID</th>
        <th>Name</th>
        <th>Salary</th>

    </div>
    <div className="tbody">
        {this.emp.map((emp)=>{
            return (
                <tr><td>{emp.id}</td>
                <td>{emp.Name}</td>
                <td>{emp.Salary}</td></tr>
            )
        })}
    </div>

</div>
            </div>
        </div>

    </div>
    
    </>
  }
}

export default Table;
