import './css/Blinds.css'

const Blinds = () => {
    return(
        <div id='blindContainer'>
            <div className="blind">
            <div className="blindDescriptor">Small Blind</div>
                <div className="numberBlind">100</div>
            </div>
            <div className='blind'>
            <div className="blindDescriptor">Big Blind</div>
                <div className="numberBlind">200</div>
            </div>
        </div>
    )
}

export default Blinds