import React, { Component } from "react";

class Sms extends Component{

    state={count:100,maxLen:100}

    updateCounterHandler=(event)=>{
        this.setState({count:this.state.maxLen-event.target.value.length})
    }


    render(){
        return <>
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">

                    <div className="card">
                        <div className="card-header bg-success">
                            <h2> sms</h2>
                        </div>
                        <div className="card-body">
                            <form action>
                                <div className="form-group">
                                    <textarea cols="30" row="5"onChange={this.updateCounterHandler}className="form-control" maxLength={this.state.maxLen}></textarea>
                                </div>
                                <h4>Reamaining char's:{this.state.count}</h4>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    }
}

export default Sms