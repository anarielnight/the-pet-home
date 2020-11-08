import React from 'react';
import './style.css';
import CheckboxRow from '../CheckboxRow'; 

function CheckboxGroup({checkGroup = [], onChangeCheckbox}) {
    return (
        <ul className="checkbox-group">
            {checkGroup.map(function(item) {
                return (
                    <li key={item.name}>
                        <CheckboxRow label={item.label} name={item.name} checked={item.checked} onChange={
                            () => {onChangeCheckbox(item.name)}
                        }/>
                    </li>
                );
            })}
            
        </ul>
    )
}

export default CheckboxGroup;