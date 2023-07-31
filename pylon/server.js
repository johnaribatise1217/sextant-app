import { server as webSocketServer } from 'websocket';
import { createServer } from 'http';

const server = createServer();
server.listen(55455);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('establishing a new connection with client');
    const connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime())
    }, 100);
});