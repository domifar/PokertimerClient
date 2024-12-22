import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Blinds from './components/Blinds'
import Settings from './components/Settings'

function App() {
  return (
    <>
      <div id='main'>
        <Timer time={100}/>
        <Blinds />
        <Settings />
      </div>
    </>
  )
}

export default App
