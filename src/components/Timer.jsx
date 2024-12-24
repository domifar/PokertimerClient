import './css/Timer.css'
import React, { useEffect, useState } from 'react'

const Timer = (params) => {
    const [time, setTime] = useState(null)
    const [isPaused, setIsPaused] = useState(null)
    const [blindIdex, setBlindIndex] = useState(0)

    useEffect(() => {
        setTime(parseInt(params.time * 60, 10))
    }, [params.time])

    useEffect(() => {
        setIsPaused(params.stopTimer)
    }, [params.stopTimer])

    useEffect(() => {
        params.setIndex(blindIdex)
    }, [blindIdex])

    useEffect(() => {
        if (isPaused) return

        const timerInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    setTime(parseInt(params.time * 60, 10))
                    clearInterval(timerInterval)
                    setBlindIndex(Math.min(blindIdex + 1, params.arrayLengh - 1))
                    playAudio()
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

    const playAudio = () => {
        console.log("audio")
        const audio = new Audio('/newBlindSound.wav')
        console.log(audio)
        audio.play().catch((error) => {
            console.error('Audio konnte nicht abgespielt werden:', error);
        })
    }

    return (
        <div id="timerContainer">
            <div id="timer">{playTimer(time)}</div>
        </div>
    )
}

export default Timer
