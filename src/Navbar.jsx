

import {Link} from 'react-router-dom'

let Navbar=()=>{
    return <>
    <nav className='navbar-dark bg-dark navbar-expand-lg'>
<Link className='navbar-brand' to ='Contact'>CONTACTAPP</Link>
<div className='ml-auto'>
    <ul className='navbar-nav'>
        <li className='nav-item'>
            <Link to ='ContactApp' className='nav-link'>Contact</Link>
        </li>
        <li className=' nav-item'>
            <Link to='User' className='nav-link'>User</Link>
        </li>
    </ul>
</div>
    </nav>
    </>
}
export default Navbar