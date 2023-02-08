import dlSt from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id:string
    name: string
}

export const Dialog = (props:DialogType) =>{
    let path = "/dialogs/" + props.id
    return(
        <div className={dlSt.item}><NavLink to={path}> {props.name}</NavLink></div>
    )
}
type MessageType = {
    message: string
}
export const Messag = (props:MessageType) =>{
    return (
        <div className="message">{props.message}</div>
    )
}

export const Dialogs = () =>{
    return(
        <div className={dlSt.dialogs}>
            <div className={dlSt.dialogs_title}><h3>Dialogs</h3></div>
            <div className={dlSt.dialogs_content}>
                <div className={dlSt.dialogs_user_panel}>
                    <Dialog id={"1"} name={"Roman"}/>
                    <Dialog id={"2"} name={"Katy"}/>
                    <Dialog id={"3"} name={"Tany"}/>
                    <Dialog id={"4"} name={"Olga"}/>
                </div>
                <div className={dlSt.messages}>
                    <Messag message={"hi"} />
                    <Messag message={"how are you"} />
                    <Messag message={"i'm fine"} />
                    <Messag message={"and you"} />
                </div>
            </div>
        </div>
    )
}