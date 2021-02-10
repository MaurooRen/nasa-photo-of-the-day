import React from 'react'
import icon from '../assets/icons/planet-earth.svg'

const Card = ({ setView, info }) => {
    return (
        <div className="Card">
            {/* <img src={icon} alt="Planet Earth Icon" /> */}
            <i>🌎</i>
            <h4>{info.short}:</h4>
            <h3>{info.name}</h3>
            <p>{info.description}</p>
            <button onClick={() => setView(info.component)}>Explore this space 👩‍🚀</button>
        </div>
    )
}

export default Card;