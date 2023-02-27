import React from "react";
import pSt from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostPageType} from "../../redux/state";

type ProfileType = {
    PostPage: PostPageType
    addPost:(postMess?: string)=>void
}

export const Profile:React.FC<ProfileType> = ({PostPage}) =>{
    return(
        <div>
            <div className={pSt.imageSamurai}></div>
            <ProfileInfo />
            <MyPost postsData={PostPage.postsData} addPost={addPost}/>
        </div>
    )
}