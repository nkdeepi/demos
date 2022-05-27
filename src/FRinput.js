import React, { forwardRef } from 'react'

//  function FRinput() {
//   return (
//     <div>FRinput
//         <input type ="text"></input>
//     </div>
//   )
// }
const FRinput=React.forwardRef((props,ref)=>{

    return (
            <div>FRinput
               <input type ="text" ref={ref}></input>
               {/* ref is forwarded from parent to child */}
            </div>
          )
})
export default FRinput;