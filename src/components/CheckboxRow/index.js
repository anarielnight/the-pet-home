import React from 'react';
import './style.css';

const noop = ()=>{};
function Checkbox({label, name, checked, onChange}) {
    return (
        <label className="checkbox-row">
            <span className="checkbox-row__label">{label}</span>
            <input 
                className="checkbox-row__checkbox" 
                type="checkbox" 
                name={name} 
                checked={checked} 
                onChange={onChange || noop }  />
                {checked
                    ? <span className="checkbox-row__mark_checked">x</span>
                    : <span className="checkbox-row__mark">п</span>
                }

        </label>
    )
}

export default Checkbox;