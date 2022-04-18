
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
  render() {
    return (
      <div>
<nav className='navbar navbar-expand-lg navbar-light bg-light'>

<Link className="navbar-brand" to="/Home"> Contact App</Link>
                  
    <ul className='navbar-nav'>
        <li className='nav-item'>
            <Link to="/ContactApp" className='nav-link'>Contacts</Link>
        </li>
    </ul>
</nav>

      </div>
    )
  }
}

export default Navbar