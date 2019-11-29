import React from 'react'

export const StartButton = ({handleButton, start}) =>{
        
    return( 
      start && 
        <button 
        onClick ={()=> handleButton() }
        className= "App-button">
        Iniciar
        </button>
    )
}
