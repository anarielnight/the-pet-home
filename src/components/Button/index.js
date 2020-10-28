import React from 'react';
import './style.css'

function Button({color, text}) {
    return (
        <button className="button"  type="button" style={{backgroundColor: color}}>{text}</button>
    )
}

export default Button;
