import React from 'react'

export const Countdown = ({seconds, starting}) =>(

        <span className= 'App-countdown'>
           {starting && seconds}
        </span>
    )
