import React from "react";
import navSt from './Navbar.module.css';

export const Navbar = () =>{
    return(
        <nav className='nav'>
            <div className={`${navSt.item} ${navSt.active}`}><a>Profile</a></div>
            <div className={navSt.item}><a>Message</a></div>
            <div className={navSt.item}><a>News</a></div>
            <div className={navSt.item}><a>Music</a></div>
            <div className={navSt.item}><a>Settings</a></div>
        </nav>
    )
}