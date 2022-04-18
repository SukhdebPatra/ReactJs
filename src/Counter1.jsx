import React from "react";

class Counter1 extends React.Component{
state={
    qty:1
}

increHandler=()=>{
    this.setState({qty:this.state.qty+1})
}
decreHandler=()=>{
    this.setState({qty:this.state.qty-1})
}

render(){
    return(
        <>
        <h4>quantity:{this.state.qty}</h4>
        <button onClick={this.increHandler} className="btn btn-light">increment</button>
        <button onClick={this.decreHandler} className="btn btn-dark">decrement</button>
        </>
    )
}

}

export default Counter1