const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/send-currency', function (req, res){
   server.emit('send', req.body);
   res.redirect('http://localhost:3001/');
});

io.on('connection', function(){
    server.on('send', (data) => {
        console.log("Data Reacte gidecek....")
        io.emit('react-send-data', data);
    });
});

server.listen(3001);
