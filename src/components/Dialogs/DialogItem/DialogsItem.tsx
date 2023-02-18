import dlSt from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
}
export const DialogsItem:React.FC<DialogType> = ({id, name}) =>{
    let path = "/dialogs/" + id
    return(
        <div className={dlSt.item} key={id}><NavLink to={path}> {name}</NavLink></div>
    )
}