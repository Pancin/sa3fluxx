import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

export function changeTurn(cb) {
    socket.on('turn', cb());
}



