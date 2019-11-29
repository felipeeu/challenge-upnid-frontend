import React , {useEffect,useState} from 'react';
import {Car} from './components/car' 
import {Scene} from './scene'
import {Countdown} from './components/countdown'
import {StartButton} from './components/startbutton'
import {InputName} from './components/inputname'
import{Label} from './components/label'
import {Turn} from './components/turn'
import {MobileControl} from './components/mobilecontrol'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';

function App() {

  const [position, setPosition] = useState({left: '30%'})
  const [blocked, setBlocked] = useState(true)
  const [seconds, setSeconds] = useState(3)
  const [start,setStart] = useState(true)
  const [starting, setStarting] = useState(false) 
  const [inputValue, setInputValue] = useState("")
  const [turn , setTurn] = useState(0)
  const [reset, setReset] = useState(false)
  const [end, setEnd] = useState(false)
  const [screen, setScreen]= useState(window.innerWidth)
  


//Effect for countdown
useEffect(() => {
      let count = 3
      const interval = starting &&
        setInterval(() => {
          count--
          setSeconds(seconds => seconds - 1);
          if (count === 0) {
            setStarting(false)
            setBlocked(false)
            clearInterval(interval)
          }
        }, 1000)
  return () => clearInterval(interval);
}, [starting]);

//Effect for turn
useEffect(() => {
      let count = 0
      const interval = seconds === 0 &&
        setInterval(() => {
          count++
          setTurn(turn => turn + 1);
          if (count === 5) {
            setEnd(true)
            clearInterval(interval)
            setBlocked(true)
              // setReset(true)  
              // clearInterval(interval) 
         
          }
        },1000)
  return () => clearInterval(interval);
}, [seconds]);

//Effect for reset game
useEffect(() => {
  return () => {
    setBlocked(true)
    setTurn(0)
    setStart(true)
    setSeconds(3)
    setStarting(false)
    setInputValue("")
    setReset(!reset)
    setPosition({left: '30%'})
    setEnd(false)
  }
}, [reset]);

//Effect for screen
useEffect(() => {
  const screenSize = window.innerWidth
  return () => {
   setScreen(screenSize)
  }
}, [screen]);



const handleButton =() => {
    setStart(false)
    return setStarting(true)}
  
const handleInput = value =>  setInputValue(value)


const handlePosition= (value) =>setPosition({left:value}) 

const handlePause =()=> !starting && !start && setBlocked(!blocked)


  return (
    <div className="App">
      <Turn 
        blocked = {blocked} 
        turn={turn}/>
      <InputName 
        start= {start} 
        handleInput= {handleInput} 
        inputValue={inputValue}/>
      <Countdown 
        seconds = {seconds} 
        starting= {starting}/>
      <Label 
        inputValue= {inputValue} 
        seconds={seconds} 
        starting= {starting} 
        end={end}/>
      <Scene 
        blocked = {blocked}
        end = {end}
        />
      <Car 
        position= {position}/> 
      <StartButton 
        handleButton = {handleButton} 
        start= {start}/>
      <MobileControl 
        screen = {screen}
        handlePosition= {handlePosition}
        handlePause={handlePause}/> 
     


      <KeyboardEventHandler
            handleKeys={['all']}
            onKeyEvent={(key, e) => {
              if (key === 'enter'){
                  start && handleButton() }
              if (key === 'esc'){
                  !starting && !start && setBlocked(!blocked) }
              if (!blocked){
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
                }}
            }} />
    </div>
  );
}

export default App;
