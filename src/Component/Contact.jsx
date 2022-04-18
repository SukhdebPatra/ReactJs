import React from "react";

function Contact(){
    return<>
    
    <div className="container mt-5">
<div className="row">
    <div className="col md-4">
    <form>

        <div className="form-group">
            <input type="text " className="form-control" placeholder="please enter email" />
        </div>
        <div className="  from-group">

            <input type="text" className="form-control"placeholder="Please enter your password" />
        </div>
<div className="btn btn-danger mr-2">LogIn</div>
<div className="btn btn-warning" >Reset</div>
    </form>
    </div>
</div>
    </div>
    </>
}
export default Contact