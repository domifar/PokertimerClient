import './css/Timer.css'
import React, { useEffect, useState } from 'react'

const Timer = (params) => {
    const [time, setTime] = useState(null)
    const [isPaused, setIsPaused] = useState(null)
    const [blinds, setBlinds] = useState([1, 2])
    const [blindIdex, setBlindIndex] = useState(0)

    useEffect(() => {
        // setTime(parseInt(params.time * 60, 10))
        setTime(5)
    }, [params.time])

    useEffect(() => {
        params.stopTimer ? setIsPaused(true) : setIsPaused(false)
    }, [params.stopTimer])

    useEffect(() => {
        setBlinds(params.blinds)
    }, [params.blinds])

    useEffect(() => {
        params.setBlind(blinds[0])
    }, [])

    useEffect(() => {
        if (isPaused) return

        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    setBlindIndex((prevIndex) => {
                        if (prevIndex >= blinds.length - 1) {
                            return prevIndex
                        } else {
                            return prevIndex + 1
                        }
                    })
                    params.setBlind(blinds[blindIdex])
                    // setTime(parseInt(params.time * 60, 10))
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