import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Navbar extends Component {
  render() {
    return <>
    <div className="navbar navbar-dark bg-dark navbar-expand-lg">


    <Link to="home">React routing</Link>
<div className="collapse navbar-collapse">
  <ul className='navbar-nav ml-auto'>
    <li className='nav-item'>
<Link to ="user" className='nav-link'>user</Link>

    </li>
  </ul>z
</div>
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam modi magnam dolores dolor corrupti blanditiis et eos quibusdam inventore ipsa totam, ab, iste velit. Tempora dicta pariatur quibusdam eum.</h1>
 
    </div>
    
    
    
    </>
  }
}

export default Navbar;
