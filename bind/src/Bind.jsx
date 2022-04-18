import React, { Component } from 'react';

 class Bind extends Component {

    state={
        emp_Sal:20000
    }


    btnHandler(value){

        console.log("reading button data",value);
        this.setState({
            emp_Sal:20000 + value,
        })
    }
  render() {
    return <div>

        <h1>This is binding ex</h1>
        <h2>emp sal:{this.state.emp_Sal}</h2>

        <hr/>
        <button onClick={this.btnHandler.bind(this,50000)}>hike 50k</button>
        <hr/>
        <button onClick={this.btnHandler.bind(this,1000000)} >Hike 1 lakh</button>
        <hr />

        <button onClick={this.btnHandler.bind(this,10000)}>Hike 10 k</button>
    </div>
  }
}

export default Bind;
