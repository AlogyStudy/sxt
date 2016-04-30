
var http = require('http');
var fs = require('fs');

var server = http.createServer(function( req,res ){
    if( req.url == '/favicon.ico' ) return false;

    var newFile = fs.mkdir('./album/aaa');

    console.log(newFile);
    res.end();
});


server.listen(1221,'127.0.0.1');




