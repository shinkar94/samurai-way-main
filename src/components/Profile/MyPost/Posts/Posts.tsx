import mpSt from "../MyPost.module.css";
import React from "react";

type PostType = {
    message: string
}

export const Posts = (props:PostType) =>{
    return(
        <div className={mpSt.item}>
            <p>{props.message}</p>
            <span>like</span>
            <span>dislike</span>
        </div>
    )
}