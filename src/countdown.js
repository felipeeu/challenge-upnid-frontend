import React from 'react'

export const Countdown = ({seconds, starting}) =>{

    return(

        <span className= 'App-countdown'>
           {starting ? seconds: ''}
        </span>
    )
}