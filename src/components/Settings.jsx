import React, { useState } from 'react'
import './css/Settings.css'

const Settings = () => {
    const [showSettings, setShowSettings] = useState(false)

    const toggleSettings = () => {
        setShowSettings(!showSettings)
        console.log("changed")
    }

    return(
        <div id="settingsContainer">
            <button id='settingsButton' onClick={toggleSettings}>
                <i className="uil uil-cog settingsIcon"></i>
            </button>

            {showSettings && (
                <div id="settingsPage">
                    <div className="settingsContent">
                        <h2>Settings</h2>
                        <p>Hier kannst du deine Einstellungen ändern.</p>
                        <button onClick={toggleSettings}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings
