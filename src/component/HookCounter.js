import React, { useState } from 'react'

 function HookCounter() {
     const initialCount=0;
     const[count,setCount]=useState(initialCount);
     const incrementFive=()=>{
        for(let i=0;i<5;i++){
             setCount(prevCount=>prevCount+1)
        }
     }

  return (
    <div>HookCounter
        <br></br>
        <h2> count:{count}<br></br></h2>
       
        <button onClick={()=>setCount(count+1)}>Increment</button><br></br>
        <button onClick={()=>setCount(count-1)}>Decrement</button><br></br>
        <button onClick={()=>setCount(initialCount)}>Reset</button><br></br>
        <button onClick={incrementFive}>IncrementFive</button><br></br>
    </div>
  )
}
export default HookCounter;