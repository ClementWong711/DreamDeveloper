const express = require('express');
const Chatroom = require('../models/chatModel')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all chatroom'})
})

//GET a single chat
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single chat'});
})

// POST a new chat
router.post('/', async (req, res) => {
    const {userA, userB, lastChatTime} = req.body

    try{
        const chatroom = await Chatroom.create({userA, userB, lastChatTime})
        res.status.json(chatroom)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a new chat'});
})

// DELETE a chat
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a chat'});
})

// UPDATE a chat
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a chat'});
})


module.exports = router