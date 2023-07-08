import React, { useState, useRef } from "react";
import { TbDotsVertical } from "react-icons/tb";
import { BsFillCursorFill } from "react-icons/bs";
import icon from "../img/myicon.png"; 
import MessageBox from "./MessageBox";

const ChatBox = ({chatWithUser}) => {

    const MyUserID = "Clement711";
    const inputRef = useRef(null);
    const [MessageList, setMessage] = useState([
        {chatRoomID: 1, userID: "Steffi123", message: "Hello World", messageTime: "2023-06-26 19:00:00", id: 1},
        {chatRoomID: 1, userID: "Clement711", message: "Hi What!", messageTime: "2023-06-26 18:30:00", id: 2},
        {chatRoomID: 1, userID: "Steffi123", message: "Omg", messageTime: "2023-06-26 18:26:00", id: 3},
        {chatRoomID: 1, userID: "Clement711", message: "LALALAL mean mean", messageTime: "2023-06-26 15:00:00", id: 4}
    ]);

    const handleSubmit = event => {
        event.preventDefault();
    };

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
                            setMessage(oldMessage => [...oldMessage, newMesasge]);
                            inputRef.current.value = '';
                        }
                    }}
                >{React.createElement(BsFillCursorFill, {size: 30})}</button>
            </form>
            
        </div>
    );
}

export default ChatBox