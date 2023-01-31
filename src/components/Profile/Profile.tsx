import React from "react";
import pSt from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";

export const Profile = () =>{
    return(
        <div className={pSt.content}>
            <div className={pSt.imageSamurai}></div>
            <div>ava + decription</div>
            <MyPost />
        </div>
    )
}