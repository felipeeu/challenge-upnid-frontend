import React from 'react'
import carImage from './images/CARRO.png'


export const Car = ({position}) =>{

    return(
        <div style ={{ 
            position: 'absolute',
            bottom: '20%', 
            ...position
             }}>
            <img src={carImage} className= "App-car"  alt='car' />

        
        </div>
    )


}
