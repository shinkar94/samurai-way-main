import dlSt from './Dialogs.module.css'

import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsItem} from "./DialogItem/DialogsItem";
import {DialogsPageType} from "../../redux/state";
import React from "react";

type DialogsType = {
    DialogsPage: DialogsPageType
}

export const Dialogs:React.FC<DialogsType> = ({DialogsPage}) =>{


    let dialogsElements = DialogsPage.dialogsData.map(el =><DialogsItem key={el.id} id={el.id} name={el.name} />)
    let messageElements = DialogsPage.messagesData.map(el =><MessageItem id={el.id} message={el.message} />)

    return(
        <div className={dlSt.dialogs}>
            <div className={dlSt.dialogs_title}><h3>Dialogs</h3></div>
            <div className={dlSt.dialogs_content}>
                <div className={dlSt.dialogs_user_panel}>
                    {dialogsElements}
                </div>
                <div className={dlSt.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}