var app = require('./app');
var debug = require('debug');
const io = require('socket.io')();

const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 9090 });
// 10.62.163.212
let clients = [];

wss.on("connection", connection => {
  clients.push(connection);
  // console.log(connection);
  //   broadcast({username: "admin", message: "a user has enetered the room"}) 

  connection.on("message", message => {
    const data = JSON.parse(message);
    //show msg to everyone
    broadcast(data)
  });
});


io.on("connection", (socket) => {
  socket.on('turn', (event) => {
    // console.log("played card");
    socket.emit.broadcast("turn", event);
  });
  socket.on('game.start', (event) => {
    socket.emit.broadcast("game.start", event);
  });
});

io.listen(3002);

const eventBus = require('./pubsub');

eventBus.on('turn', (event) => {
  // console.log("event bus");
  io.emit('turn', event);
});
eventBus.on('game.start', (event) => {
  // console.log("ciaone");
  io.emit('game.start', event);
});
eventBus.on('win', (event) => {
  io.emit('win', event);
});



setInterval(cleanUp, 100)

function broadcast(message) {
  const data = JSON.stringify(message)
  clients.forEach(client => client.send(JSON.stringify(data)));
}

function cleanUp() {
  const clientsLeaving = clients.filter(client => client.readyState == client.CLOSED)
  clients = clients.filter(client => client.readyState !== client.CLOSED)
  clientsLeaving.forEach(client => broadcast({ username: "admin", message: "a user has left the room" }))
}


app.set('port', process.env.PORT || 3001);

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});

//sockets
// const io = require('socket.io')(server);

// io.on('connection', function (socket) {
//     console.log('client connected');
//     //add clients to listen on the channel "Publish and Subscirbe"
//     socket.join("fluxx game");
//     //disconnect clients from channel
//     socket.on('disconnect', function () {
//         console.log('client disconnected');
//     });
// });