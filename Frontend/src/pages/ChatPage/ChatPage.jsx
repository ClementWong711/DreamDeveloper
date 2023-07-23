import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";
import React, { useEffect, useState } from 'react';
import { useAuthContext } from "../../Hooks/useAuthContext";

const ChatPage = () => {
    const [chatroomsArr, setChatrooms] = useState([]);
    const [chatRoomSelected, setchatRoomSelected] = useState("")
    const { user } = useAuthContext()
    const chatWithUser = (typeof chatRoomSelected.user !== 'undefined')?chatRoomSelected.user.find(chatFd => chatFd !== user.unique_name):""

    const changeRoom = (newRoom) => {
        setchatRoomSelected(newRoom)
    }

    useEffect(() => {
        const fetchChatrooms = async () => {
            const response = await fetch(`/api/chatroom/${user.unique_name}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if(json !== ''){
                setChatrooms(json);
                setchatRoomSelected(json[0]);
            }
        };

        if(user){
            fetchChatrooms()
        }
    }, [user]);

    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex h-[calc(70%)] w-[calc(70%)]">
            <ChatRoomList 
                chatList={chatroomsArr}
                selectedChatroom={chatRoomSelected}
                changeRoom={changeRoom}
            />
            <ChatBox 
                chatWithUser={chatWithUser}
                selectedChatroom={chatRoomSelected}
            />
            
        </div>
    );

};
export default ChatPage;