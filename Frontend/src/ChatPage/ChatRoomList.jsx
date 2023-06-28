import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import React from "react";

const ChatRoomList = ({chatList, handleState}) => {
    return (
        <div className="w-1/3">
            <SearchBox/>
            <ContactList chatList={chatList} handleState={handleState}/>
        </div>
    );
}

export default ChatRoomList;