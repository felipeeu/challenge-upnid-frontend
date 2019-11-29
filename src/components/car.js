import React from 'react'
import carImage from '../images/CARRO.png'


export const Car = ({position}) =>(

        <div style ={{ 
            ...position
             }} className= "App-car">
            <img src={carImage} className= "App-carimage"  alt='car' />
        </div>
    )



