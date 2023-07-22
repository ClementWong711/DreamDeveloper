const express = require('express');
const {
    createChatroom,
    getChatrooms,
    getChatroom,
    deleteChatroom,
    updateChatroom,
} = require("../controllers/chatController")
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

router.use(requireAuth)

// get all chatroom
router.get('/', getChatrooms)

//GET a single chatroom
router.get('/:id', getChatroom)

// POST a new chatroom
router.post('/', createChatroom)

// DELETE a chatroom
router.delete('/:id', deleteChatroom)

// UPDATE a chat
router.patch('/:id', updateChatroom)


module.exports = router