const Chatroom = require('../models/chatModel')
const mongoose = require("mongoose")

// get all chatroom
const getChatrooms = async (req, res) => {
    const chatrooms = await Chatroom.find({}).sort({last_chat_time: -1})

    res.status(200).json(chatrooms)
}
// get a single chatroom
const getChatroom = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }

    const chatroom = await Chatroom.findById(id)

    if(!chatroom){
        return res.status(400).json({error: 'No Such Chatroom'})
    }
    res.status(200).json(chatroom)
}

// create new chatroom
const createChatroom = async (req, res) => {
    const userA = req.body.userA
    const userB = req.body.userB
    const lastChatUser = req.body.lastChatUser?req.body.lastChatUser:req.body.userB
    try{
        const chatroom = await Chatroom.create({userA, userB, lastChatUser})
        res.status(200).json(chatroom)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a chatroom
const deleteChatroom = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }

    const chatroom = await Chatroom.findOneAndDelete({_id: id})
    if(!chatroom){
        return res.status(400).json({error: 'No Such Chatroom'})
    }
    res.status(200).json(chatroom)
}

// Update a chatroom
const updateChatroom = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such ID"})
    }
    const chatroom = await Chatroom.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!chatroom){
        return res.status(400).json({error: 'No Such Chatroom'})
    }
    res.status(200).json(chatroom)
}

module.exports = {
    createChatroom,
    getChatrooms,
    getChatroom,
    deleteChatroom,
    updateChatroom
}
