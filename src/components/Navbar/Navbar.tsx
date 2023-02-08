import React from "react";
import navSt from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () =>{
    return(
        <nav className='nav'>
            <div className={`${navSt.item} ${navSt.active}`}><NavLink to={"/profile"} activeClassName={navSt.active}>Profile</NavLink></div>
            <div className={navSt.item}><NavLink to={"/dialogs"} activeClassName={navSt.active}>Message</NavLink></div>
            <div className={navSt.item}><a>News</a></div>
            <div className={navSt.item}><a>Music</a></div>
            <div className={navSt.item}><a>Settings</a></div>
        </nav>
    )
}