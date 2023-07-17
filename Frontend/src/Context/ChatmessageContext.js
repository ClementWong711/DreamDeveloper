import { createContext, useReducer } from 'react'

export const ChatMessagesContext = createContext()

export const chatmessagesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MESSAGES':
            return {
                chatmessages: action.payload
            }
        case 'ADD_MESSAGE':
            return {
                chatmessages: [...state.chatmessages, action.payload]
            }
        default:
            return state
    }
}

export const ChatMessageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(chatmessagesReducer, {
        chatmessages: null
    })

    return (
        <ChatMessagesContext.Provider value={{...state, dispatch}}>
            { children }
        </ChatMessagesContext.Provider>
    )
}