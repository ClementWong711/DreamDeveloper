const MessageItem = ({messageDetail, MyUserID}) => {
    return (
        <div className={`p-1 flex justify-${messageDetail.userID === MyUserID ? 'end' : 'start'}`}>
            <span className="p-1 bg-blue-900 rounded-xl">{messageDetail.message}</span>
        </div>
    );
}

export default MessageItem;