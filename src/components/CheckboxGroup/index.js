import React from 'react';
import './style.css';
import Checkbox from '../Checkbox'; 

function CheckboxGroup({checkGroup = []}) {
    return (
        <ul className="checkbox-group">
            {checkGroup.map(function(item) {
                return (
                    <li key={item.name}>
                        <Checkbox label={item.label} name={item.name} checked={item.checked}/>
                    </li>
                );
            })}
            
        </ul>
    )
}

export default CheckboxGroup;