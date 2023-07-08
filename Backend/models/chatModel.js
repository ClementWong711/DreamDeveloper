const mongoose = require('mongoose')
const { Schema } = mongoose;

const chatRoomSchemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'last_chat_time' },
};

const ChatRoomSchema = new Schema({
    userA: {
        type: String,
        required: true
    },
    userB: {
        type: String,
        required: true
    },
    lastChatUser:{
        type: String,
        required: true
    }
}, chatRoomSchemaOptions)

module.exports = mongoose.model('Chatroom', ChatRoomSchema)