import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import 'dotenv/config'

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server:server });

wss.on('connection', function connection(ws, req) {
    console.log("New client Connected")
    ws.send('Successfully Connected the socket')
    const ip = req.socket.remoteAddress;

    ws.on('message', function incoming(message) {
        console.log('received the message: ' + message)
        ws.send('Socket server got your message: ' + message)
    })

    ws.on('error', console.error);
});

server.listen(process.env.WS_PORT, () => {
    console.log("Listening to Port: " + process.env.WS_PORT)
})