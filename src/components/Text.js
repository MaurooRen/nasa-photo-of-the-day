import React from 'react'

const Text = ({ text, date }) => {
    return (
        <div className="Text">
            <span>{ text }</span>
            <small>Date: { date }</small>
        </div>
    )
}

export default Text;