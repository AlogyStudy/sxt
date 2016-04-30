

var http = require('http');

//创建服务器
var server = http.createServer(function( req,res ){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    res.end('index');
});

//运行服务器
server.listen(8080,'127.0.0.1');


