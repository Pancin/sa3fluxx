import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:3002');
const socket = openSocket('http://10.62.163.212:3002');

export function changeTurn(cb) {
    socket.on('turn', cb);
}

export function startGame(startCb) {
    socket.on("game.start", () => { 
        startCb()
    });
}

export function onWin(winCb) {
    socket.on("win", (event) => {
        winCb();
    });
}
