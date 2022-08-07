import React from 'react'
import {useSelector, useDispatch} from "react-redux";
function Buy
() {
  const myState=useSelector((state)=> state.changethenum)
  return (
    <div>
      {myState=="got"?
      <div> Welcome 
        <br></br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/W8U_w2CIzDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      :<div> Login First</div>
      }
    </div>
  )
}

export default Buy
