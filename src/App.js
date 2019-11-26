import React from 'react';
import {Car} from './car' 
import {Scene} from './scene'
import {Countdown} from './countdown'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';



function App() {
  const [position , setPosition] = React.useState({left: '30%' })
  const[blocked ,setBlocked]=React.useState(false)
  const [seconds, setSeconds] = React.useState(3)
  const [starting,setStarting]= React.useState(true)


  React.useEffect(() => {
      let count = 3
    const interval = setInterval(() => {
      count--
      setSeconds(seconds => seconds - 1);
      if(count ===0){
        setStarting(false)
        clearInterval(interval)
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);


 

  return (
    <div className="App">
    <Countdown seconds = {seconds} starting= {starting}/>
    <Scene blocked = {blocked}/>
    <Car position= {position}/>   


    <KeyboardEventHandler
            handleKeys={['all']}
            onKeyEvent={(key, e) => {
                switch(key){ 
                  case 'esc':
                    return setBlocked(!blocked)
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
            }} />


    </div>



  );
}

export default App;
