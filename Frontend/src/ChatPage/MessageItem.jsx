const MessageItem = ({messageDetail}) => {
    return (
        <div className="p-1">
            <div className="border bg-blue-900 w-auto">{messageDetail.message}</div>
        </div>
    );
}

export default MessageItem;