import React from 'react'
import { Link,Outlet,NavLink } from 'react-router-dom'
import './nav.css'

function Product() {
  return (
      <>
    
    <nav class='product'>
        <NavLink to='Featured'>Featured</NavLink>
        <NavLink to='New' >New</NavLink>
    </nav>
<center>

    <div>
      <h2>
        PRODCUT PAGE
      </h2>
      <label for=''>Products:</label>
        <input  name='product' type='search' placeholder='Seach Products'></input>
    </div>
</center>
    <Outlet/>
      </>

  )
}

export default Product