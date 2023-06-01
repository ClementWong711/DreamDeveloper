import ContactList from "./ContactList";
import SearchBox from "./SearchBox";

const ChatRoomList = () => {
    return (
        <div className="w-full">
            <SearchBox/>
            <ContactList/>
        </div>
    );
}

export default ChatRoomList;