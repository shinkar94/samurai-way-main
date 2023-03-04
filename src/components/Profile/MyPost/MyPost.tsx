import React, {ChangeEvent} from "react";
import mpSt from "./MyPost.module.css";
import {Posts} from "./Posts/Posts";
import {PostPageType} from "../../../redux/state";

type MyPostType = {
    PostPage: PostPageType
    addPost:()=>void
    updatePostChange:(newtext: string)=>void
}

export const MyPost:React.FC<MyPostType> = (props) => {
    const {PostPage, addPost, updatePostChange} = props

    let postsElements = PostPage.postsData.map(el => {
        return (
            <Posts key={el.id}
                   id={el.id}
                   message={el.message}
                   like={el.likeCount}
                   dlike={el.dislikeCount}/>
        )
    })

    const addPostHandler = () =>{
        addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        updatePostChange(e.currentTarget.value)
    }


    return (
        <div>
            MyPost
            <div>
                <textarea onChange={onChangeHandler} value={PostPage.newPostText}/>
                <button onClick={addPostHandler}>Add</button>
            </div>
            <div className={mpSt.posts}>
                {postsElements}
            </div>
        </div>
    )
}