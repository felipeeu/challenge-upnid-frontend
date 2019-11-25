import React from 'react'
import carImage from './images/CARRO.png'
import KeyboardEventHandler from 'react-keyboard-event-handler';


export const Car = ({position}) =>{

    // const [position , setPosition] = React.useState({left: '30%' })
    return(
        <div style ={{ 
            position: 'absolute',
            bottom: '20%', 
            ...position
             }}>
            <img src={carImage} className= "App-car"  alt='car' />

        {/* <KeyboardEventHandler
            handleKeys={['all']}
            onKeyEvent={(key, e) => {
                switch(key){ 
                    case 'a':
                    return setPosition({left:'0%' })
                    case 's':
                    return setPosition({left:'30%' })
                    case 'd':
                    return setPosition({left:'60%' })
                    case 'down':
                    return setPosition({left:'30%' })
                    case 'right':
                    if (position.left === '0%'){
                        return setPosition({left:'30%' })
                    }else{
                        return setPosition({left:'60%' })  
                    }
                    case 'left':
                    if (position.left === '60%'){
                        return setPosition({left:'30%' })
                    }else{
                        return setPosition({left:'0%' })  
                    }
                    default:
                    return position
                }
            }} /> */}
        </div>
    )


}
