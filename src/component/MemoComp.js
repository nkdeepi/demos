import React from 'react'

function MemoComp({name}) {
    console.log("memo component renderd")
  return (
    <div>MemoComp
        {name}
    </div>
  )
}

export default  React.memo(MemoComp);

//same with pure components...memo with fc//