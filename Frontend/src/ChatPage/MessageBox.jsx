import MessageItem from "./MessageItem";

const MessageBox = ({MessageList}) => {
    
    return ( 
        <div className="bg-gradient-to-t from-[#0e0e0e] to-[#141414] h-[calc(80%)] mb-2">
            {
                
                MessageList.map((messageDetail) => (
                    <MessageItem messageDetail={messageDetail}/>
                ))
            }
        </div>
    );
}

export default MessageBox;