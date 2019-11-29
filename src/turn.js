import React from 'react'

export const Turn = ({blocked, turn}) =>{
    return(
        !blocked &&
   <div className="App-turn">{turn}/4</div>
)}