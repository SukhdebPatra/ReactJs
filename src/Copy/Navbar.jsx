import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return<>
        <nav className="nav navbar-dark bg-dark navbar-expand-lg">

            <Link to ="home">react link</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item">
                      <Link to="Services" className="nav-link">Services</Link>
                  </li>
                  <li className="nav-item">
                         <Link to="contact" className="nav-link">Contact</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="Product" className="nav-link">Product</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="Sms" className="nav-link">SMS</Link>
                  </li>
                </ul>
            </div>
        </nav>
        </>
    }
}
export default Navbar
