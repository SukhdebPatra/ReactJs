import React from "react";

function Contact(){
    return(
        <>
        <div className="container mt-5" >

            <div className="row">
                <div className="col-md-3">
<div className="form-group">
    <input type="text" className="form-control"placeholder="Please Enter Email"/>

 
</div>
<div className="form-group">
    <input type="text" className="form-control" placeholder=" Enter your password"/>
</div>
<button className="btn btn-danger mr-2"> login</button>
<button type='reset' className=" btn btn-primary">reset</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact