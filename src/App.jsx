import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Blinds from './components/Blinds'
import Settings from './components/Settings'

function App() {
  const [time, setTime] = useState(1)
  const [isPaused, setIsPaused] = useState(true)
  const [blind, setBlind] = useState(null)
  const [blinds, setBlinds] = useState(null)

  return (
    <>
      <div id='main'>
        <Timer time={time} stopTimer={isPaused} setBlind={setBlind} blinds={blinds}/>
        <Blinds blind={blind}/>
        <Settings time={time} setNewTime={setTime} setIsPaused={setIsPaused} setBlinds={setBlinds}/>
      </div>
    </>
  )
}

export default App
