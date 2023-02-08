import React from "react";
import pSt from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () =>{
    return(
        <div>
            <div className={pSt.imageSamurai}></div>
            <ProfileInfo />
            <MyPost />
        </div>
    )
}