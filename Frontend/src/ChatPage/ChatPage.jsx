import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";
import React, { useState } from "react";

const ChatPage = () => {
    const chatlistArr = [
        {userID: "Nicholas456", userName: "Nicholas", lastChatTime: "2023-06-19 18:30:00", id: 1},
        {userID: "Steffi123", userName: "Stefbe", lastChatTime: "2023-06-26 19:00:00", id: 2},
        {userID: "Sam133", userName: "Sam", lastChatTime: "2023-06-16 19:00:00", id: 3}
    ];
    chatlistArr.sort((a, b) => a.lastChatTime > b.lastChatTime ? -1 : 1,);

    const defaultRoom = chatlistArr[0];
    const [chatRoomSelected, setChatRoom] = useState(defaultRoom.id);
    const chatRoom = chatlistArr.find(obj => obj.id === chatRoomSelected);
    const handleState = (chatRoomID) => {
        setChatRoom(chatRoomID);
    }

    
    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex w-full">
            <ChatRoomList 
                chatList={chatlistArr}
                handleState={handleState}
            />
            <ChatBox chatWithUser={chatRoom.userName}/>
        </div>
    );
};
export default ChatPage;