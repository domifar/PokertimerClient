import './css/Timer.css'
import React, { useEffect, useState } from 'react'

const Timer = (params) => {
    const [time, setTime] = useState(null)
    const [isPaused, setIsPaused] = useState(null)
    const [blindIdex, setBlindIndex] = useState(0)

    useEffect(() => {
        setTime(5)
    }, [params.time])

    useEffect(() => {
        params.stopTimer ? setIsPaused(true) : setIsPaused(false)
    }, [params.stopTimer])

    useEffect(() => {
        if (blindIdex < params.arrayLengh) {
            params.setIndex(blindIdex)
        }
    }, [blindIdex, params])

    useEffect(() => {
        if (isPaused) return

        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    setBlindIndex((prevIndex) => Math.min(prevIndex + 1, params.arrayLengh - 1))
                    setTime(5)
                    clearInterval(timerInterval)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [time, isPaused])

    const playTimer = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
        const secs = (seconds % 60).toString().padStart(2, '0')
        return `${mins}:${secs}`
    }

    return (
        <div id="timerContainer">
            <div id="timer">{playTimer(time)}</div>
        </div>
    )
}

export default Timer
