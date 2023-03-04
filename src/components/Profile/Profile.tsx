import React from "react";
import pSt from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPageType} from "../../redux/state";

type ProfileType = {
    PostPage: PostPageType
    addPost:()=>void
    updatePostChange: (newtext: string)=>void
}

export const Profile:React.FC<ProfileType> = (props) =>{
    const {PostPage,addPost,updatePostChange} = props
    return(
        <div>
            <div className={pSt.imageSamurai}></div>
            <ProfileInfo />
            <MyPost PostPage={PostPage}
                    addPost={addPost}
                    updatePostChange={updatePostChange}
            />
        </div>
    )
}