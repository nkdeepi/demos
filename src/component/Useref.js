import React,{useState,useEffect,useRef} from 'react'

 function Useref() {
     const[inputValue,setInputvalue]=useState("")
     const count=useRef(0);
     useEffect (()=>{
         count.current=count.current+1

     },[])

  return (
    <div>Useref
        <input type="text" value={inputValue} onChange={(e)=>setInputvalue(e.target.value)}></input>
        <h2>count:{count.current}</h2>
    </div>
  )
}
export default Useref;