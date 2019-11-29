import React from 'react'

export const MobileControl = ({handlePause,handlePosition, screen}) =>{
        
    return( 
    screen < 415 &&
    <div className = "App-mobilecontrol"> 
        <button onClick= {()=> handlePosition('0%' )} className= "App-buttonmobile">⭠</button>
        <button onClick= {()=> handlePosition('30%' )} className= "App-buttonmobile">middle</button>
        <button onClick={() => handlePosition('60%' ) } className= "App-buttonmobile">⭢</button> 
        <button onClick={() => handlePause() } className= "App-buttonmobile">pause</button> 
    </div>
        
    )
}