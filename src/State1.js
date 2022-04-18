import React from "react";

class State1 extends React.Component {


    state = {
        message: "hello dear....",
        
    }



    gmHandler = () => {
        console.log("state is updating");
        this.setState({ message: "hello good evening" })
    }

    gnHandler = () => {
        this.setState({ message: "good night-take rest" })
    }

    render(){
        console.log("render method -1");
        return<>
        <h4>message:{this.state.message}</h4>
        <button onClick={this.gmHandler}className="btn btn-danger" >gm</button>
        
        <button onClick={this.gnHandler} className="btn btn-primary">GN</button>

      

        </>
    }
}

export default State1