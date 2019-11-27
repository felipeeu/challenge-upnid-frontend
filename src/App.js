import React from 'react';
import {Car} from './car' 
import {Scene} from './scene'
import {Countdown} from './countdown'
import {StartButton} from './startbutton'
import {InputName} from './inputname'
import{Label} from './label'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';


function App() {
  const [position, setPosition] = React.useState({left: '30%'})
  const [blocked, setBlocked] = React.useState(true)
  const [seconds, setSeconds] = React.useState(3)
  const [start,setStart] = React.useState(true)
  const [starting, setStarting] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")
  


React.useEffect(() => {
      let count = 3
      const interval = starting ? setInterval(() => {
        count--
        setSeconds(seconds => seconds - 1);
        if (count === 0) {
          setStarting(false)
          setBlocked(false)
          clearInterval(interval)
        }
      }, 1000) : null;
    
    return () => clearInterval(interval);
  
  }, [starting]);

  const handleButton =() => {
    setStart(false)
    return setStarting(true)}
  
const handleInput =(value)=> {
  setInputValue(value)
}

  return (
    <div className="App">
    <Countdown seconds = {seconds} starting= {starting}/>
    <Label inputValue= {inputValue} seconds={seconds}/>
    <Scene blocked = {blocked}/>
    <Car position= {position}/> 
    <StartButton handleButton = {handleButton} start= {start}/>  
    <InputName start= {start} handleInput= {handleInput} inputValue={inputValue}/>

    <KeyboardEventHandler
            handleKeys={['all']}
            onKeyEvent={(key, e) => {
              if (key === 'esc'){
                   setBlocked(!blocked) }
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
