

import React, { Component } from 'react';

 class Logiin extends Component {
     state={
         Email:"sukhdeb@gmail.com",
         Password:""
     }
     updateHandler=(event)=>
     {
         this.setState({[event.target.name]:event.target.value})
     }
     submitHandler=(event)=>{
         event.preventDefault()
         console.log(this.state);
     }
  render() {
    return <div>
        <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col">
                    <form onSubmit={this.submitHandler}>
                        <div className='form-group'>
                            <input type='text' className='form-control'placeholder='Email' name='Email' value={this.state.Email}onChange={this.updateHandler}/>
                        </div>
                        <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Password" name="Password" onChange={this.updateHanlder} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success" value="Login" />
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
  }
}

export default Logiin;
