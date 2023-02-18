import React from "react";
import pSt from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPageType} from "../../redux/state";

type ProfileType = {
    PostPage: PostPageType
}

export const Profile:React.FC<ProfileType> = ({PostPage}) =>{
    return(
        <div>
            <div className={pSt.imageSamurai}></div>
            <ProfileInfo />
            <MyPost postsData={PostPage.postsData}/>
        </div>
    )
}