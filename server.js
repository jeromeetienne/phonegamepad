var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//////////////////////////////////////////////////////////////////////////////
//                export static files
//////////////////////////////////////////////////////////////////////////////
app.get('/', function(req, res){
        res.sendfile('./phone.html');
});
app.get('/phone.html', function(req, res){
        res.sendfile('./phone.html');
});
app.get('/phoneasvrcontroller.js', function(req, res){
        res.sendfile('./phoneasvrcontroller.js');
});
app.get('/phoneasvrcontrollerextra.js', function(req, res){
        res.sendfile('./phoneasvrcontrollerextra.js');
});
app.get('/webspeech-commands.js', function(req, res){
        res.sendfile('./examples/vendor/speechapi-experiments/webspeech-commands.js');
});


//////////////////////////////////////////////////////////////////////////////
//                handle socket.io
//////////////////////////////////////////////////////////////////////////////
io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
                console.log('user disconnected');
        });
        socket.on('broadcast', function(msg){
                console.log('broadcast', msg)
                io.emit('broadcast', msg);
        });
});


//////////////////////////////////////////////////////////////////////////////
//                start listening 
//////////////////////////////////////////////////////////////////////////////

http.listen(3000, function(){
        console.log('listening on *:3000');
});