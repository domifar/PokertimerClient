import { useState } from 'react'
import './css/Blinds.css'

const Blinds = (params) => {
    return(
        <div id='blindContainer'>
            <div className="blind">
            <div className="blindDescriptor">Small Blind</div>
                <div className="numberBlind">{params.blind}</div>
            </div>
            <div className='blind'>
            <div className="blindDescriptor">Big Blind</div>
                <div className="numberBlind">{params.blind * 2}</div>
            </div>
        </div>
    )
}

export default Blinds