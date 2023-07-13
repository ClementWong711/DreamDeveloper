import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";
import React, { useEffect, useState } from 'react';

const ChatPage = () => {
    const[chatroomsArr, setChatrooms] = useState([]);
    const [chatRoomSelected, setchatRoomSelected] = useState("")
    const [MessageList, setMessages] = useState([])
    const roomMessageList = MessageList.find((messageItem) => messageItem.chatroomID === chatRoomSelected._id)
    const [selectedRoomMessageList, setRoomMessage] = useState(roomMessageList)
    console.log(selectedRoomMessageList)

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
        const roomMessageList = MessageList.find((messageItem) => messageItem.chatroomID === chatRoomSelected._id)
        setRoomMessage(roomMessageList)
    }

    useEffect(() => {
        const fetchChatmessages = async () => {
            const response = await fetch(`/api/chatmessage`);
            const json = await response.json();

            if(typeof json != 'undefined'){
                setTimeout(()=>{
                    setMessages(json);
                }, 2000)
            }
        };
        
        fetchChatmessages();

        
    })

    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex h-[calc(70%)] w-[calc(70%)]">
            <ChatRoomList 
                chatList={chatroomsArr}
                selectedChatroom={chatRoomSelected}
                handleState={handleState}
            />
            <ChatBox 
                chatWithUser={chatRoomSelected.userA} 
                chatRoomMessagesList={selectedRoomMessageList} 
                chatRoomID={chatRoomSelected._id}/>
        </div>
    );

};
export default ChatPage;