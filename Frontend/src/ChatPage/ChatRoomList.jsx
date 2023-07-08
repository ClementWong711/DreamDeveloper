import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import React from "react";

const ChatRoomList = ({chatList, selectedChatroom, handleState}) => {
    return (
        <div className="w-1/3">
            <SearchBox/>
            <ContactList chatList={chatList} selectedChatroom={selectedChatroom} handleState={handleState}/>
        </div>
    );
}

export default ChatRoomList;