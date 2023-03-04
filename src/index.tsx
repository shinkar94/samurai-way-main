import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subsribe} from "./redux/state";
import {addPost,updatePostChange} from "./redux/state";



export let rerenderEntarent = () =>{
    ReactDOM.render(
        <App state={state} addPost={addPost} updatePostChange={updatePostChange}/>,
        document.getElementById('root')
    );
}

rerenderEntarent()

subsribe(rerenderEntarent)