import logo from "../../img/logo.png";
import React from "react";
import headSt from './Header.module.css';

export const Header = () =>{
    return(
        <header className={headSt.header}>
            <img src={logo}/>
        </header>
    )
}