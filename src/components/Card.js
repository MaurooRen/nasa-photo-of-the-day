import React from 'react'

const Card = ({ setView, info }) => {
    return (
        <div className="Card">
            <i>🌎</i>
            <h4>{info.short}:</h4>
            <h3>{info.name}</h3>
            <p>{info.description}</p>
            <button onClick={() => setView(info.component)}>Explore this space 👩‍🚀</button>
        </div>
    )
}

export default Card;