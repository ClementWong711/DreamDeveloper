import { ChatMessagesContext } from "../Context/ChatmessageContext";
import { useContext } from "react";

export const useChatMessagesContext = () => {
    const context = useContext(ChatMessagesContext)

    if(!context) {
        throw Error('useChatMessagesContext must be used inside an ChatMessageProvider')
    }

    return context
}