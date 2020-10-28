import React from 'react';
import './style.css';
import Pentophoto from "../../components/Pentophoto";
import CheckboxGroup from "../../components/CheckboxGroup";

const checkgroup1 = [
    {name:"flat", label: "Квартира", checked: true},
    {name:"house", label: "Загородный дом", checked: false},
    {name:"cage", label: "Вольер", checked: false}
]
function Filters() {
    return (
        <div className="filters">
            <meta name="theme-color" content="#e0e0e0"></meta>
            <CheckboxGroup checkGroup={checkgroup1}/>
            <Pentophoto src="https://placekitten.com/600/600" id="fjhfdh"/>
            <Pentophoto src="https://placekitten.com/300/300" id="fjhfdh2"/>
        </div>
    )
}

export default Filters;