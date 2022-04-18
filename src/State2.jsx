import React,{Component} from 'react'

export class State1 extends Component{

    state={
        qty:0
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }

    render (){
        return <>
        <h1>State 1</h1>
        <pre>QTY::{JSON.stringify(this.state)}</pre>
        <h2>Qty:{this.state.qty}</h2>
        <button className='btn btn-outline-success btn-lg' onClick={this.incrHandler}>IncrHandler</button>
        <button className='btn btn-outline-warning btn-lg'onClick={this.decrHandler}>DecrHandler</button>
        </>
    }
}
export default State1