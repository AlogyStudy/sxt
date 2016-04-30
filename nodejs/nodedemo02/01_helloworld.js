
var http = require('http');

var server = http.createServer(function( req,res ){

    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});

    res.end('sueess');

});


server.listen(1223,'127.0.0.1');
