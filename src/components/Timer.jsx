import './css/Timer.css'
import React, { useEffect, useState } from 'react'

const Timer = (params) => {
    const [time, setTime] = useState(() => {
        return parseInt(params.time, 10)
    })

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerInterval)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timerInterval)
    }, [time])

    const playTimer = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
        const secs = (seconds % 60).toString().padStart(2, '0')
        return `${mins}:${secs}`
    }

    return(
        <div id="timerContainer">
            <div id="timer">{playTimer(time)}</div>
        </div>
    )
}

export default Timer
