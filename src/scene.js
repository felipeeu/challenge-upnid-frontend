import React from 'react'
import sceneImage from './images/CENARIO_anima.gif'
import blockImage from './images/image-stoped-.png'
 
export const Scene = ({blocked}) =>{

    return(
        <div >
            <img src={blocked? blockImage : sceneImage} className="App-scene"  alt='scene' /> 
        </div>
    )
}