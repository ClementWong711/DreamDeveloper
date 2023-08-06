import mongoose, { Schema } from 'mongoose'

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

export default mongoose.model('ChatMessage', ChatMessageSchema)