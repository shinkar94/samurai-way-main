import React from "react";
import mpSt from "./MyPost.module.css";
import {Posts} from "./Posts/Posts";
import {PostsType} from "../../../redux/state";

type MyPostType = {
    postsData: PostsType[]
}

export const MyPost:React.FC<MyPostType> = ({postsData}) => {

    let postsElements = postsData.map(el => {
        return (
            <Posts key={el.id}
                   id={el.id}
                   message={el.message}
                   like={el.likeCount}
                   dlike={el.dislikeCount}/>
        )
    })
    return (
        <div>
            MyPost
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={mpSt.posts}>
                {postsElements}
            </div>
        </div>
    )
}