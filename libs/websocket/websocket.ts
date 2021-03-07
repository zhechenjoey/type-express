import {Socket} from "socket.io";
const http = require('http');
const io = require('socket.io');
import express = require("express");
import { isTemplateExpression } from "typescript";
export class WebSocketService {
    private static server: any;
    static InitWebsocket(app: express.Application) {
        this.server = http.createServer(app);
        app.locals.socket = io(this.server).on('connect', (socket: Socket) => {
            socket.emit('CONNECT','连接成功');
            console.log(socket);
            console.log('连接成功');

        })
        this.startTask(app);
        this.server.listen(3002);
    }

    static startTask(app: express.Application) {
        setTimeout(()=>{
            // app.locals.socket = null;
        }, 20000);
        setInterval(()=>{
            app.locals.socket.emit('unreadMessageHandler')
            app.locals.socket.emit('alarmHandler')
        }, 5000);
    }
}
