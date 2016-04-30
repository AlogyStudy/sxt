

var http = require('http');
var fs = require('fs');

var server = http.createServer(function( req,res ){

    if( req.url == '/favicon.ico' ) return false;

    var userId = parseInt(Math.random()*89999)+10000;
    console.log('开始链接'+userId);


    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    //第一个参数，是完整的路径，当前目录 使用 ./
    //第二个参数，就是回调函数，表示当前文件读取成功之后，做的事情.
    fs.readFile('./1.txt',function( err,data ){
        if( err ) throw err;

        res.end(data);
        console.log('文件读取完毕'+userId);

    });

});

server.listen(1221,'127.0.0.1');

