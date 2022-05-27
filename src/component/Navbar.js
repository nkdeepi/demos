import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './nav.css'

function Navbar() {
   
    // const navStyle=({isActive})=>{
    //     return{
    //         fontWeight:isActive?'bold':'normal',
    //         textDecoration:isActive?'none':'dashed',
    //         textColour:isActive?'red':'blue'
            

    //     }

    // }
  return (
    <div>
        <nav className='nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Products</NavLink>

            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

        </nav>
       
    </div>
  )
}

export default Navbar