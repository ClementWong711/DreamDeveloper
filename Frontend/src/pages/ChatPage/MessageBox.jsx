import MessageItem from "./MessageItem";

const MessageBox = ({chatRoomMessages, MyUserID}) => {
    
    return ( 
        <div 
            className="bg-gradient-to-t from-[#0e0e0e] to-[#141414] overflow-y-auto h-[calc(80%)] mb-2 p-2 flex flex-col justify-end"
        >
            {
                chatRoomMessages.map((message, i) => (
                    <MessageItem key={i} message={message} MyUserID={MyUserID}/>
                ))
            }
        </div>
    );
}

export default MessageBox;