import React from "react";
import mpSt from "./MyPost.module.css";
import {Posts} from "./Posts/Posts";
import {PostsType} from "../../../redux/state";

type MyPostType = {
    postsData: PostsType[]
    addPost:(postMess?: string)=>void
}

export const MyPost:React.FC<MyPostType> = (props) => {
    const {postsData, addPost} = props

    let postsElements = postsData.map(el => {
        return (
            <Posts key={el.id}
                   id={el.id}
                   message={el.message}
                   like={el.likeCount}
                   dlike={el.dislikeCount}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () =>{
        let text = newPostElement.current?.value
        addPost(text)
    }


    return (
        <div>
            MyPost
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPostHandler}>Add</button>
            </div>
            <div className={mpSt.posts}>
                {postsElements}
            </div>
        </div>
    )
}