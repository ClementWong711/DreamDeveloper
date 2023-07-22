import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";
import React, { useEffect, useState } from 'react';
import { useChatMessagesContext } from "../../Hooks/useChatMessagesContext";
import { useAuthContext } from "../../Hooks/useAuthContext";

const ChatPage = () => {
    const {chatmessages, dispatch} = useChatMessagesContext()
    const [chatroomsArr, setChatrooms] = useState([]);
    const [chatRoomSelected, setchatRoomSelected] = useState("")
    const { user } = useAuthContext()
    const foundMessages = (chatmessages)?chatmessages.filter(message=>message.chatroomID === chatRoomSelected._id):[]

    const changeRoom = (newRoom) => {
        setchatRoomSelected(newRoom)
    }

    useEffect(() => {
        const fetchChatrooms = async () => {
            const response = await fetch('/api/chatroom', {
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

        const fetchChatMessges = async () => {
            const response = await fetch('/api/chatmessage', {
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
            fetchChatrooms()
            fetchChatMessges()
        }
    }, [dispatch, user]);

    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex h-[calc(70%)] w-[calc(70%)]">
            <ChatRoomList 
                chatList={chatroomsArr}
                selectedChatroom={chatRoomSelected}
                changeRoom={changeRoom}
            />
            <ChatBox 
                chatWithUser={chatRoomSelected.userA}
                chatRoomMessages={foundMessages}/>
            
        </div>
    );

};
export default ChatPage;