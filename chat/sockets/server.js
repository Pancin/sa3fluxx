const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({ port: 9090 });

let clients = [];

wss.on("connection", connection => {
  clients.push(connection);
  console.log(connection);
//   broadcast({username: "admin", message: "a user has enetered the room"}) 

  connection.on("message", message => {
    const data = JSON.parse(message);
    //show msg to everyone
    broadcast(data)
  });
});

setInterval(cleanUp, 100)

function broadcast(message) {
    const data =JSON.stringify(message)
    clients.forEach(client => client.send(JSON.stringify(data)));
}

function cleanUp(){
    const clientsLeaving = clients.filter(client => client.readyState == client.CLOSED)
    clients = clients.filter(client => client.readyState !== client.CLOSED)
    clientsLeaving.forEach(client => broadcast({username: "admin", message: "a user has left the room"}))
}
