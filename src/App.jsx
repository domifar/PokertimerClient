import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Blinds from './components/Blinds'
import Settings from './components/Settings'

function App() {
  const [time, setTime] = useState(0.1)
  const [isPaused, setIsPaused] = useState(true)
  const [index, setIndex] = useState(0)
  const [blinds, setBlinds] = useState([100, 200])

  return (
    <>
      <div id='main'>
        <Timer time={time} stopTimer={isPaused} setIndex={setIndex} blinds={blinds} arrayLengh={blinds.length}/>
        <Blinds blind={blinds[index]}/>
        <Settings time={time} setNewTime={setTime} setIsPaused={setIsPaused} setBlinds={setBlinds} setIndex={setIndex}/>
      </div>
    </>
  )
}

export default App
