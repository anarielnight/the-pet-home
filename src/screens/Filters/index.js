import React from 'react';
import './style.css';
import Pentophoto from "../../components/Pentophoto";
import CheckboxGroup from "../../components/CheckboxGroup";


class Filters extends React.Component {
    state = {
        checkGroup: [
            {name:"flat", label: "Квартира", checked: true},
            {name:"house", label: "Загородный дом", checked: false},
            {name:"cage", label: "Вольер", checked: false}
        ]
    }
    /*handleClick = () => {
        const {checkGroup} = this.state;
        this.setState({
            checkGroup: checkGroup.map((item) => {
                return {name: item.name, label: item.label, checked: Math.random() > 0.5 }
            })
        }) 
    }*/
    handleChangeCheckbox = (name) => {
        const {checkGroup} = this.state;
        this.setState({
            checkGroup: checkGroup.map((item) => {
                return {name: item.name, label: item.label, checked: (name === item.name) ? !item.checked : item.checked }
            })
        }) 
    }
    render() {
        return (
            <div className="filters">
                <meta name="theme-color" content="#e0e0e0"></meta>
                <CheckboxGroup checkGroup={this.state.checkGroup} onChangeCheckbox={this.handleChangeCheckbox}/>
            </div>
        )
    }
}

export default Filters;