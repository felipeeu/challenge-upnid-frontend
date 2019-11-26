import React from 'react'


 
export const StartButton = ({handleButton, blocked}) =>(
        
        <button 
        onClick ={()=> handleButton() }
        className= "App-button"
        style = {{
            display: !blocked ? 'none': 'unset'
        }}
        >Iniciar</button>
       
    )
