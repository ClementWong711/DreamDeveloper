import React, { useState } from "react";
import { TbDotsVertical } from "react-icons/tb";
import icon from "../../img/myicon.png"; 
import MessageBox from "./MessageBox";
import InputMessageBox from "./InputMessageBox";
import { useChatMessagesContext } from "../../Hooks/useChatMessagesContext";

const ChatBox = ({chatWithUser, chatRoomMessages}) => {
    const { dispatch } = useChatMessagesContext()
    const [message, setChatmessage] = useState('')
    const MyUserID = "clement711";
    const chatroomID = (chatRoomMessages.length > 0)?chatRoomMessages[0].chatroomID:""
    const sender = MyUserID
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const chatMessage = {chatroomID, sender, message}
        const response = await fetch('/api/chatmessage', {
            method: 'POST',
            body: JSON.stringify(chatMessage),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setChatmessage('')
            console.log('new message created!')
            dispatch({type: 'ADD_MESSAGE', payload: json})
        }
    }

    return (
        <div className="w-full bg-[#141414] p-2 rounded-xl ml-4">
            <div className="flex justify-between">
                <div className="flex text-xl">
                    <img src={icon} alt="icon" className="w-10 mr-2"/>
                    <span className="flex items-center">{chatWithUser}</span>
                </div>
                <span className="flex justify-item-center items-center mr-3">{React.createElement(TbDotsVertical, {size: 30})}</span>
            </div>
            <MessageBox chatRoomMessages={chatRoomMessages} MyUserID={MyUserID}/>
            <InputMessageBox handleSubmit={handleSubmit} setChatmessage={setChatmessage} messageValue={message}/>
        </div>
    );
}

export default ChatBox