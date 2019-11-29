import React from 'react'

export const Label = ({inputValue, seconds, starting}) =>{

    return(
    seconds === 1 ?
    <span className="App-label">
      {inputValue?  `Go, ${inputValue}!` : "Go, friend!"}
    </span>: null
    ||
    starting ?
    <span className="App-label">
        Are you ready?
    </span>: null
    
)




}
