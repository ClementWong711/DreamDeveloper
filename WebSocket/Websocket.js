import express from 'express';
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import 'dotenv/config'

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server: server });

const postChatMessage = async ({messageData, userToken}) => {
    const response = await fetch('http://localhost:5000/api/chatmessage', {
        method: 'POST',
        body: JSON.stringify(messageData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    })
    const json = await response.json()

    if(!response.ok){
        console.log(json.error)
    }
    if(response.ok){
        console.log("saved message")
    }
}

wss.on('connection', function connection(ws) {
    ws.send('Connected Socket server')
    ws.on('error', console.error);
    console.log("new connection")
    ws.on('message', function incoming(message) {
        const res = JSON.parse(message.toString())
        if(res.type === "message"){
            console.log(res.data)
            postChatMessage({messageData:res.data, userToken:res.token})
            wss.clients.forEach((client) => {
                if(client.readyState === WebSocket.OPEN){
                    client.send(JSON.stringify(res.data))
                }
            })
        }
    })
})

server.listen(process.env.WS_PORT, () => {
    console.log("Listening to Port: " + process.env.WS_PORT)
})