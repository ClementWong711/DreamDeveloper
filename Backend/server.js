const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();


// express app
const app = express();
const chatroomRoutes = require('./routes/chatroom')
const chatmessageRoutes = require('./routes/chatmessage')
const userRoutes = require('./routes/user')

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/chatroom', chatroomRoutes)
app.use('/api/chatmessage', chatmessageRoutes)
app.use('/user', userRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error);
    })



