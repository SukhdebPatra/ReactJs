import React, { Component } from "react"
class Message extends Component {
    state = {
        message: "Hello"
    }
    gmHandler = () => {
        this.setState({ message: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" })
    }
    render() {
        return (
            <div>
                <h4>Message: {this.state.message}</h4>
                <button onClick={this.gmHandler}>Gm</button>
                <button onClick={this.gnHandler}>Gn</button>
            </div>
        )
    }
}
export default Message;