import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';


// express app
const app = express();
import chatroomRoutes from './routes/chatroom.js';
import chatmessageRoutes from './routes/chatmessage.js';
import userRoutes from './routes/user.js'

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



