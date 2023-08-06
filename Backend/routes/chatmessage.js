import express from 'express';
import {
    createChatmessage,
    getChatmessages,
    getChatmessage,
    deleteChatmessage,
    updateChatmessage,
} from '../controllers/messageController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();
router.use(requireAuth)

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

export default router;