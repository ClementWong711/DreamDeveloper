import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const[chatroomsArr, setChatrooms] = useState([]);
    const [chatRoomSelected, setchatRoomSelected] = useState("")


    useEffect(() => {
        const fetchChatrooms = async () => {
            const response = await fetch(`/api/chatroom`);
            const json = await response.json();

            if(typeof json != 'undefined'){
                setChatrooms(json);
                setchatRoomSelected(json[0]);
            }
        };
        
        fetchChatrooms();
    }, []);

    const handleState = (chatRoom) => {
        setchatRoomSelected(chatRoom);
    }

    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex h-[calc(70%)] w-[calc(70%)]">
            <ChatRoomList 
                chatList={chatroomsArr}
                selectedChatroom={chatRoomSelected}
                handleState={handleState}
            />
            <ChatBox chatWithUser={chatRoomSelected.userA}/>
        </div>
    );

};
export default ChatPage;