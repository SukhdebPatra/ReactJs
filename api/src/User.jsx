import React, { Component } from 'react';
import Axios from 'axios'

 class User extends Component {
   constructor (props){
   super(props);
   console.log("First construter");
   this.state={
     user:[]
   }
 }
componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{
    this.setState({user:response.data})
  }).catch()
}
render()
{
console.log("second -render");
 
return(
  <>
  <h1>user data</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
<div className="table table-hover">
  <thead className='bg-dark text-white'>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {
      
      this.state.user.map((singleuser)=>{

        return <tr>
          <td>{singleuser.id}</td>
          <td>{singleuser.name}</td>
          <td>{singleuser.email}</td>
        </tr>
      })

     
    }
      
  </tbody>
</div>
      </div>
    </div>
  </div>
  </>
)

}
  
}
export default User
