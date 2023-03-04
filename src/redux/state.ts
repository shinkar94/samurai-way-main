import {rerenderEntarent} from "../index";


export type StateType ={
    DialogsPage: DialogsPageType
    PostPage: PostPageType
}
export type DialogsPageType ={
    dialogsData: DialogsType[]
    messagesData: MessageType[]
}
export type PostPageType = {
    postsData: PostsType[]
    newPostText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsType = {
    message: string
    id: number
    likeCount: number
    dislikeCount: number
}

let renderIntarentTrue = () => {
    console.log("hihihi")
}

export const state:StateType = {
    DialogsPage:{
        dialogsData: [
            {id:1, name:"Roman"},
            {id:2, name:"Katy"},
            {id:3, name:"Tany"},
            {id:4, name:"Olga"},
            {id:5, name:"Roman"}
        ],
        messagesData:[
            {id: 1, message: "hi Roman"},
            {id: 2, message: "hi Roman"},
            {id: 3, message: "hi Roman"},
            {id: 4, message: "hi Roman"}
        ]
    },
    PostPage:{
        postsData:[
            {id: 1, message: "hi man", likeCount: 11, dislikeCount: 1},
            {id: 2, message: "nooo", likeCount: 12, dislikeCount: 1},
            {id: 3, message: "!!!yes", likeCount: 10, dislikeCount: 1},
            {id: 4, message: "hi Roman", likeCount: 22, dislikeCount: 1}
        ],
        newPostText: '',
    }
}


export const addPost = () =>{
    let newPost = {
        id:5,
        message: state.PostPage.newPostText,
        likeCount: 1,
        dislikeCount: 1
    };
    state.PostPage.postsData.push(newPost);
    state.PostPage.newPostText = '';
    rerenderEntarent()
}
export const updatePostChange = (newtext: string) =>{
    state.PostPage.newPostText = newtext;
    rerenderEntarent();
}



export const subsribe = (observer:()=>void)=>{
    renderIntarentTrue = observer
}

