import React from "react";
import dayjs from "dayjs";

const MessageItem = ({messageDetail, MyUserID}) => {
    const ShowTime = dayjs(messageDetail.messageTime).format("HH:mm");
    const ShowDateTime = dayjs(messageDetail.messageTime).format("YYYY-MM-DD HH:mm");
    const MessageTime = dayjs(messageDetail.messageTime).format("YYYY-MM-DD");
    const current = new Date();
    const CurrentDate = current.getFullYear()+"-"+(current.getMonth()+1)+"-"+current.getDate();
    const CurrentDateFormatted = dayjs(CurrentDate).format("YYYY-MM-DD");

    return (
        <div className={`p-1 flex justify-${messageDetail.userID === MyUserID ? 'end' : 'start'}`}>
            <span className="p-1 pl-2 pr-2 bg-blue-900 rounded-xl">{messageDetail.message}<span className="text-xs pl-2 text-gray-400">{(MessageTime===CurrentDateFormatted)?ShowTime:ShowDateTime}</span></span>
        </div>
    );
}

export default MessageItem;