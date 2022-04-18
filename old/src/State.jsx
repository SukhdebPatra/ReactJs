import React, { Component } from 'react';

class State extends Component {
    state={
        qty:1,
        msg:"Hello"
    }
    increHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }

    decrementHandler=()=>{
        this.setState({qty:this.state.qty-1})

    }

    gmHandler=()=>{
        this.setState({msg:"good morning"})
    }
    gnHandler=()=>{
        this.setState({msg:"good night"})
    }
  render() {
    return <div>
        <h4>State concept</h4>
        <h2>Quantity:{this.state.qty}</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <hr/>
        <button onClick={this.increHandler}className='btn btn-primary'>increment</button>
        <button onClick={this.decrementHandler}className='btn btn-danger'>Decrement</button>
        <hr/>
        <h1>Message:{this.state.msg}</h1>
        <button onClick={this.gmHandler} className='btn btn-dark'>GM</button>
        <button onClick={this.gnHandler}className='btn btn-dark'>GN</button>
  <hr/>
    </div>;
  }
}

export default State;
