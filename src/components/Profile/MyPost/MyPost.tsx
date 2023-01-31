import React from "react";
import mpSt from "./MyPost.module.css";
import {Posts} from "./Posts/Posts";


export const MyPost = () => {
    return (
        <div>
            MyPost
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={mpSt.posts}>
                <Posts message={"post1"}/>
                <Posts message={"post2"}/>
                <Posts message={"post3"}/>
                <Posts message={"post4"}/>
            </div>
        </div>
    )
}