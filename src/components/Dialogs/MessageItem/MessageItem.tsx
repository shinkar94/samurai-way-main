


type MessageItemType = {
    id: number
    message: string
}


export const MessageItem:React.FC<MessageItemType> = ({id, message}) =>{
    return (
        <div className="message" key={id}>{message}</div>
    )
}