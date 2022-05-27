import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
   const placeOrder=useNavigate()
  return (
      <div>

          <div>Home Page<br>
          </br>
              <button onClick={()=>{placeOrder('OrderSummary')}}>Place Order</button>
          </div>
      </div>
  )
}

export default Home