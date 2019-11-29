import React from 'react'

export const Turn = ({blocked, turn}) =>{
    return(
        !blocked &&
   <div className="App-turn">
   <span style={{fontSize:'xx-large'}}>Turns</span>
   <span style={{fontWeight:'bold'}}>{turn===5 ? 4 : turn}/4</span>
   </div>
)}