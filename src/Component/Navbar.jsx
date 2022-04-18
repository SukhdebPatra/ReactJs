import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Navbar extends Component{

    render(){

        return <>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
<Link to ="Home">React Routing</Link>
<div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
        <li className=" nav-item">
            <Link to="Services" className="nav-link">Servcices</Link>
          
        </li>
        <li className="nav-item">
             <Link to="Contact" className="nav-link">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="sms" className="nav-link">SMS</Link>
                        </li>
    </ul>
</div>
            
            
        </nav>
        </>
    }

}

export default Navbar