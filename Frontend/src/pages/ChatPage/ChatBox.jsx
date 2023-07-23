import React, { useState, useEffect } from "react";
import { TbDotsVertical } from "react-icons/tb";
import icon from "../../img/myicon.png"; 
import MessageBox from "./MessageBox";
import InputMessageBox from "./InputMessageBox";
import { useChatMessagesContext } from "../../Hooks/useChatMessagesContext";
import { useAuthContext } from "../../Hooks/useAuthContext";

const ChatBox = ({chatWithUser, selectedChatroom}) => {
    const { chatmessages, dispatch } = useChatMessagesContext()
    const { user } = useAuthContext()
    const [message, setChatmessage] = useState('')
    const chatroomID = selectedChatroom._id
    const sender = user.unique_name
    const [error, setError] = useState(null)
    

    useEffect(() => {
        const fetchChatMessges = async () => {
            const response = await fetch(`/api/chatmessage/${chatroomID}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
    
            if(response.ok){
                dispatch({type:'SET_MESSAGES', payload:json})
            }
        }

        if(user){
            fetchChatMessges()
        }
    }, [selectedChatroom])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        const chatMessage = { chatroomID, sender, message}
        const response = await fetch('/api/chatmessage', {
            method: 'POST',
            body: JSON.stringify(chatMessage),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
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
            <MessageBox chatRoomMessages={chatmessages} MyUserID={sender}/>
            <InputMessageBox handleSubmit={handleSubmit} setChatmessage={setChatmessage} messageValue={message}/>
        </div>
    );
}

export default ChatBox