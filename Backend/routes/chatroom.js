import express from 'express';
import {
    createChatroom,
    getChatrooms,
    getChatroom,
    deleteChatroom,
    updateChatroom,
} from '../controllers/chatController.js';
import requireAuth from  '../middleware/requireAuth.js';

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


export default router;