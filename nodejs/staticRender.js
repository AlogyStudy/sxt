
var http = require('http');
var fs = require('fs');


var server = http.createServer(function( req,res ){

    if( req.url == '/fang' ){
        fs.readFile('./fang.html',function( err,data ){
            res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
            res.end(data);
        });
    } else if( req.url == '/yuan' ) {
        fs.readFile('./test.html',function( err,data ){
            res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
            res.end(data);
        });
    } else {
        res.writeHead(404,{'Content-type':'text/html;charset=utf-8'});
        res.end('没有这个页面');
    }

});

server.listen(8080,'127.0.0.1');

