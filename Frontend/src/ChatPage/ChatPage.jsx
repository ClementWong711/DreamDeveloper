import ChatBox from "./ChatBox";
import ChatRoomList from "./ChatRoomList";

const ChatPage = () => {
    return (
        <div className="bg-[#0e0e0e] rounded-3xl p-5 flex w-full">
            <ChatRoomList/>
            <ChatBox/>
        </div>
    );
};
export default ChatPage;