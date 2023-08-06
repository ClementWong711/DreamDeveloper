import express from 'express';
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import 'dotenv/config'

const app = express();
const server = createServer(app);

const wss = new WebSocketServer({ server: server });

const postChatMessage = async ({messageData, userToken}) => {
    const response1 = await fetch('http://localhost:5000/api/chatmessage', {
        method: 'POST',
        body: JSON.stringify(messageData),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    })
    const json1 = await response1.json()

    if(!response1.ok){
        console.log(json1.error)
    }
    if(response1.ok){
        console.log("saved message")
    }

    const response2 = await fetch(`http://localhost:5000/api/chatroom/${messageData.chatroomID}`, {
        method: 'PATCH',
        body: JSON.stringify({"lastChatUser":messageData.sender}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    })
    const json2 = await response2.json()

    if(!response2.ok){
        console.log(json2.error)
    }
    if(response2.ok){
        console.log("updated chatroom")
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