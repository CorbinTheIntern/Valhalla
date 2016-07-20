var socket = io.connect();

var can, ctx, CAN_W, CAN_H, client, data, loggedIn, hosting;

var event;

function init() {
    socket.on('data', function(_data) {
        data = _data;
    });
    
    can = document.getElementById("can");
    ctx = can.getContext("2d");
    
    if(window.innerWidth < 600) {
        CAN_W = window.innerWidth;
        CAN_H = window.innerHeight;
        window.addEventListener("resize", function() {
	       if(window.innerWidth <= window.innerHeight) {
               socket.emit("pause", client.id);
           }
        }, false);
    } else {
        CAN_W = 600;
        CAN_H = 600;
    }
    
    can.width = CAN_W;
    can.height = CAN_H;
    
    setInterval(loop, 1000/data.FPS);
}

function getPlayerInfo () {
    var result;
    
    if(client) {
        result = "client";
    } else {
        result = "host";
    }
    
    socket.emit('player', result);
}

function loop () {
    if(!loggedIn) {
        draw('login');
    } else if(hosting) {
        draw('board');
    } else {
        draw('controller');
    }
    
    if(loggedIn) {
        if(!hosting) {
            var inputs = checkInputs();
        }
        move();
    }
}

function draw (screen) {
    case(screen)
}

function checkInputs() {
    if()
}