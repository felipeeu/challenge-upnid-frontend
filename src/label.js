import React from 'react'

export const Label = ({inputValue, seconds}) =>{

    return(
    seconds === 0 ?
    <span>
        Vai lá {inputValue}
    </span>: null
    
)}
