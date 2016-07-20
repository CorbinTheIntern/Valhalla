var fs = require("fs");
var express = require("express");

var app = express();
var server = require('http').createServer(app).listen(8080);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var players, rooms;
var defaults

function init() {
    rooms = [];
    players = [];
    
    io.sockets.on('connection', function (socket) {
        socket.on("login", function() {
            socket.emit('data', data);
            players[socket.id] = new player(socket.id, defaults);
            socket.broadcast.emit('player', {
                id: socket.id,
                params: defaults
            });
        });
    });
    
    console.log("Running");
}

function player(result, socket) {
    if(result == "client") {
        players.push(client.id);
    } else {
        createNewRoom();
    }
}

function createNewRoom() {
    var roomId = generateID(5);
    rooms[roomId] = new room(roomId);
    console.log("Room " + roomId + " created");
}

function generateID (length) {
    var id = "R";
    for(var i = 0; i < length; i++) {
        id += Math.floor(Math.random()*10).toString;
    }
    return id;
}

init();