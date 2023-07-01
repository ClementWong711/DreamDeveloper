const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ChatRoomSchema = new Schema({
    userA: {
        type: String,
        required: true
    },
    userB: {
        type: String,
        required: true
    },
    lastChatTime: {
        type: Date,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Chatroom', ChatRoomSchema)