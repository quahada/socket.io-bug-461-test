var express = require('express');
var socketIO = require('socket.io');

var app = express.createServer();
var io = socketIO.listen(app);

io.configure(function () {
    io.set("transports", ["xhr-polling"]); 
    io.set("polling duration", 10); 
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/test.html');
});

app.listen(3000);

io.sockets.on('connection', function (socket) {

  socket.on('leaving-page', function(){
    console.log('\nleaving-page\n');
  });

  socket.on('disconnect', function(){
    console.log('\ndisconnect\n');
    socket.leave(socket.room);
  });

});



