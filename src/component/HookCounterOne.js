//usestate...objects inside


import React, { useState } from 'react'

 function HookCounterOne() {
     const[name,setName]=useState({FirstName:"",LastName:""})

  return (
      <form>

          <input type="text" value={name.FirstName} onChange={(e)=>setName({... name,FirstName:e.target.value})} ></input>
          <input type="text" value={name.LastName} onChange={(e)=>setName({...name, LastName:e.target.value})}></input>
          {/* //creating a copy of name */}
          <h3>First name is:{name.FirstName}</h3>
          <h3>Last name is:{name.LastName}</h3>
          <h3> {JSON.stringify(name)}</h3>
      
      </form>
    
  )
}
export default HookCounterOne;