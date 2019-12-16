import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

export function changeTurn(cb) {
    socket.on('turn', cb);
}

export function startGame(cb) {
    socket.on("game.start", () => { 
        cb()
    });
    socket.on("win", (event) => {
        console.log("WIN");
    });
}

