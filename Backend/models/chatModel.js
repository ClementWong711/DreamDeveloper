const mongoose = require('mongoose')
const { Schema } = mongoose;

const chatRoomSchemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'last_chat_time' },
};

const ChatRoomSchema = new Schema({
    user: {
        type: Array,
        required: true
    },
    lastChatUser:{
        type: String,
        required: true
    }
}, chatRoomSchemaOptions)

module.exports = mongoose.model('Chatroom', ChatRoomSchema)