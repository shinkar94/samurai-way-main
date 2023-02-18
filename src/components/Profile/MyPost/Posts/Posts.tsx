import mpSt from "../MyPost.module.css";
import React from "react";

type PostType = {
    id: number
    message: string
    like: number
    dlike: number
}

export const Posts: React.FC<PostType> = ({
    id,
    message,
    like,
    dlike
}) =>{
    return(
        <div className={mpSt.item}>
            <p>{message}</p>
            <span>{like}</span>
            <span>{dlike}</span>
        </div>
    )
}