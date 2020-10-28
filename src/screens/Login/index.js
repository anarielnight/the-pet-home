import React from 'react';
import './style.css';
import Button from "../../components/Button";
import Logo from "../../img/logo.png";

function Login() {
    return (
        <div className="login">
            <meta name="theme-color" content="#064940"></meta>
            <h1 className="login__logo">the Pet Home</h1>
            <img src={Logo} className="login__logo-image" alt=""/>
            <p className="login__label">Войти с помощью</p>
            <ul className="login__enters">
                <li className="login__enter">
                    <Button className="login__button" color="#3e509c" text="Facebook" />
                </li>
                <li className="login__enter">
                    <Button className="login__button" color="#c13c31" text="Google" />
                </li>
            </ul>    
        </div>
    )
}

export default Login;