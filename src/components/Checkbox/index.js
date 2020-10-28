import React from 'react';
import './style.css';

const noop = ()=>{};
function Checkbox({label, name, checked, onChange}) {
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                {label}
                <input 
                    className="checkbox__ratio" 
                    type="checkbox" 
                    name={name} 
                    checked={checked} 
                    onChange={onChange || noop }  />
            </label>
        </div>
    )
}

export default Checkbox;