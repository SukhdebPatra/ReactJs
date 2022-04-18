


import React, { Component } from 'react';
class Message extends Component {
    message="hi this is me"

    changeMessageHandler=()=>{
        console.log("test case 3-messageHandler");
        console.log(this.message,"before update");
        this.message="good morning mr Modi Ji:"
        console.log(this.message,"After updare");
        this.forceUpdate()


    }
  render() {
      console.log("test case2-render");
    return <>
    <h5>message Component</h5>
    <h2>message:{this.message}</h2>
    <button onClick={this.changeMessageHandler}>change msg</button>
    </>;
  }
}

export default Message;
