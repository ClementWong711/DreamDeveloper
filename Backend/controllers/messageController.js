const ChatMessage = require('../models/messageModel')
const mongoose = require("mongoose")

// get all chatmessage
const getChatmessages = async (req, res) => {
    const chatmessages = await ChatMessage.find({}).sort({send_time: 1})

    res.status(200).json(chatmessages)
}
// get all message by chatroomID
const getChatmessage = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }

    const chatmessage = await ChatMessage.find({chatroomID: id})

    if(!chatmessage){
        return res.status(400).json({error: 'No Such Chatroom message'})
    }
    res.status(200).json(chatmessage)
}

// create new chat message
const createChatmessage = async (req, res) => {
    const chatroomID = req.body.chatroomID
    const sender = req.body.sender
    const message = req.body.message
    try{
        const chatmessage = await ChatMessage.create({chatroomID, sender, message})
        res.status(200).json(chatmessage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a chat message
const deleteChatmessage = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }

    const chatmessage = await Chatroom.findOneAndDelete({_id: id})
    if(!chatmessage){
        return res.status(400).json({error: 'No Such Chat message'})
    }
    res.status(200).json(chatroom)
}

// Update a chat message
const updateChatmessage = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }
    const chatmessage = await ChatMessage.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!chatmessage){
        return res.status(400).json({error: 'No Such Chat message'})
    }
    res.status(200).json(chatmessage)
}

module.exports = {
    createChatmessage,
    getChatmessages,
    getChatmessage,
    deleteChatmessage,
    updateChatmessage
}