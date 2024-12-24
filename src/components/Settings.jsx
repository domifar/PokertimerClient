import React, { useState, useEffect } from 'react'
import './css/Settings.css'

const Settings = (params) => {
    const [showSettings, setShowSettings] = useState(false)
    const [play, setPlay] = useState(false)
    const [blinds, setBlinds] = useState([100])

    useEffect(() => {
            params.setBlinds(blinds)
        }, [])

    const toggleSettings = () => {
        setShowSettings(!showSettings)
    }

    const togglePlay = () => {
        setPlay(!play)
        params.setIsPaused(play)
    }

    const NewTime = (time) => {
        params.setNewTime(time)
    }

    const isValidSeconds = (input) => {
        if (input >= 0) {
            NewTime(input)
        }
    }

    const handleBlindChange = (index, value) => {
        const updatedBlinds = [...blinds]
        updatedBlinds[index] = value
        setBlinds(updatedBlinds)
        params.setBlinds(updatedBlinds)
    }

    const reset = () => {
        params.setIndex(0)
        params.setNewTime(0)
        params.setIsPaused(true)
        setPlay(false)
    }

    return (
        <div id="settingsContainer">
            <button className='settingsButton' onClick={toggleSettings}><i className="uil uil-cog settingsIcon"></i></button>
            <div>
                <button className='settingsButton' onClick={reset}><i className="uil uil-redo playIcon"></i></button>
                <button className='settingsButton' onClick={togglePlay}>{play ? <i className="uil uil-pause playIcon"></i> : <i className="uil uil-play playIcon"></i>}</button>
            </div>
            
            {showSettings && (
                <div id="settingsPage">
                    <div className="settingsContent">
                        <div id="topContainer">
                            <button id='closeButton' onClick={toggleSettings}><i className="uil uil-angle-left backIcon"><div>Close</div></i></button>
                            <h2>Settings</h2>
                        </div>
                        <div id="settingsText">
                            <p id='timeInput'>Time: <input defaultValue={params.time} onChange={(event) => isValidSeconds(event.target.value)} type="tel" />min</p>
                            <div id='blindInputs'>
                                Blinds:{blinds.map((blind, index) => (
                                <p key={index}>
                                    <input
                                        type="tel"
                                        value={blind}
                                        onChange={(e) => handleBlindChange(index, e.target.value)}
                                        placeholder={`Blind`}
                                    />
                                </p>
                            ))}
                            <button id='blindsButton' onClick={() => setBlinds([...blinds, ""])}>Add Blind</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings
