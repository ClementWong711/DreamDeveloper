import { ChatMessagesContext } from "../Context/chatmessage";
import { useContext } from "react";

export const useChatMessagesContext = () => {
    const context = useContext(ChatMessagesContext)

    if(!context) {
        throw Error('useChatMessagesContext must be used inside an ChatMessageProvider')
    }

    return context
}