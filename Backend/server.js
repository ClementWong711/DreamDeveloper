const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();


// express app
const app = express();
const chatroomRoutes = require('./routes/chat')

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/chat', chatroomRoutes);

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



