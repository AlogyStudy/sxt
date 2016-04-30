
var http = require('http');
var fs = require('fs');

var server = http.createServer(function( req,res ){
    if( req.url == '/favicon.ico' ) return false;

    fs.stat('./album/aaa',function( err,data ){
        //判断是否是文件夹
        console.log(data.isDirectory());

    });


    res.end();
});


server.listen(1221,'127.0.0.1');




