import React, { useState, useRef, useEffect } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { BsFillCursorFill } from "react-icons/bs";
import icon from "../img/myicon.png"; 
import MessageBox from "./MessageBox";

const ChatBox = ({chatWithUser, chatRoomID}) => {

    const MyUserID = "clement711";
    const inputRef = useRef(null);
    const [MessageList, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const fetchChatmessages = async () => {
            if(typeof chatRoomID !== 'undefined'){
                const response = await fetch(`/api/chatmessage/${chatRoomID}`);
                const json = await response.json();
    
                if(typeof json != 'undefined'){
                    setMessages(json);
                }
            }
        };
        
        fetchChatmessages();
    })

    return (
        <div className="w-full bg-[#141414] p-2 rounded-xl ml-4">
            <div className="flex justify-between">
                <div className="flex text-xl">
                    <img src={icon} alt="icon" className="w-10 mr-2"/>
                    <span className="flex items-center">{chatWithUser}</span>
                </div>
                <span className="flex justify-item-center items-center mr-3">{React.createElement(TbDotsVertical, {size: 30})}</span>
            </div>
            <MessageBox MessageList={MessageList} MyUserID={MyUserID}/>
            <form className="flex justify-between" onSubmit={handleSubmit}>
                <input 
                    className="bg-transparent w-[calc(80%)] border border-gray-700 rounded-3xl p-2 focus:outline-none" 
                    type="text" 
                    name="message" 
                    ref={inputRef} 
                    placeholder="message" 
                />
                <button
                    className="flex justify-item-center items-center mr-3 focus:outline-none"
                    type="submit"
                    onClick={()=> {
                        if(inputRef.current.value !== ''){
                            const newMesasge = {
                                chatRoomID: 1, 
                                userID: MyUserID, 
                                message: inputRef.current.value, 
                                messageTime: Date().toLocaleString(), 
                                id: 5
                            }
                            setMessages(oldMessage => [...oldMessage, newMesasge]);
                            inputRef.current.value = '';
                        }
                    }}
                >{React.createElement(BsFillCursorFill, {size: 30})}</button>
            </form>
            
        </div>
    );
}

export default ChatBox