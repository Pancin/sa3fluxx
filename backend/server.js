var app = require('../app');
var debug = require('debug');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

//sockets
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('client connected');
    //add clients to listen on the channel "Publish and Subscirbe"
    socket.join("fluxx game");
    //disconnect clients from channel
    socket.on('disconnect', function () {
        console.log('client disconnected');
    });
});