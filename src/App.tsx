import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import appSt from "./App.module.css"
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";


type AppType = {
    state: StateType
}

const App:React.FC<AppType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className={appSt.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={appSt.content}>
                    <Route path='/dialogs' render={()=><Dialogs DialogsPage={state.DialogsPage}/>}/>
                    <Route path='/profile' render={()=><Profile PostPage={state.PostPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
