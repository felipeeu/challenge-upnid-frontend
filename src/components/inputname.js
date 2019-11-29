import React from 'react'

export const InputName = ({handleInput,start, inputValue}) =>{

    return(
    start &&
    <input className= "App-input"
        value={inputValue}
        onChange={e => handleInput(e.target.value)}
    />
)}

