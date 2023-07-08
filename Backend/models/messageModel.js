const mongoose = require('mongoose')
const { Schema } = mongoose;

const chatRoomSchemaOptions = {
    timestamps: { createdAt: 'send_time', updatedAt: 'updated_at' },
};

const ChatMessageSchema = new Schema({
    chatroomID: {
        type: String,
        required: true
    },
    sender: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, chatRoomSchemaOptions)

module.exports = mongoose.model('ChatMessage', ChatMessageSchema)