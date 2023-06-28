import React from "react";
import { TbDotsVertical } from "react-icons/tb";
import icon from "../img/myicon.png"; 

const ChatBox = ({chatWithUser}) => {
    return (
        <div className="w-full bg-[#141414] p-2 rounded-xl ml-4">
            <div className="flex justify-between w-96">
                <div className="flex text-xl">
                    <img src={icon} className="w-10 mr-2"/>
                    <span className="flex items-center">{chatWithUser}</span>
                </div>
                {React.createElement(TbDotsVertical, {size: 20})}
            </div>
            
        </div>
    );
}

export default ChatBox