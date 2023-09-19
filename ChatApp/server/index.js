var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

let roomCountedArr = [];
app.get("/", function(req, res){
    res.send("Hello World!");
});

io.on('connection', (socket) => {
    socket.on('connection-room', (data) => {
        if(data.roomName.length !== 0){
            roomCountedArr[data.roomName] = isNaN(roomCountedArr[data.roomName]) ? 1 : roomCountedArr[data.roomName] + 1;
        }
        socket.join(data.roomName);
        io.to(data.roomName).emit('connection-room-view', {count: roomCountedArr[data.roomName]})
    });



    socket.on('leave-room', (data) => {
        if(data.length !== 0){
            roomCountedArr[data] = isNaN(roomCountedArr[data]) ? 0 : roomCountedArr[data] - 1;
        }

        socket.join(data.roomName);
        io.to(data.roomName).emit('leave-room-view', {count: roomCountedArr[data]})
    });
});

server.listen(3000);
