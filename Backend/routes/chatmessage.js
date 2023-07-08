const express = require('express');
const {
    createChatmessage,
    getChatmessages,
    getChatmessage,
    deleteChatmessage,
    updateChatmessage,
} = require("../controllers/messageController")

const router = express.Router();

// get all chatroom
router.get('/', getChatmessages)

//GET a single chatroom
router.get('/:id', getChatmessage)

// POST a new chatroom
router.post('/', createChatmessage)

// DELETE a chatroom
router.delete('/:id', deleteChatmessage)

// UPDATE a chat
router.patch('/:id', updateChatmessage)


module.exports = router