

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function( req,res ){

    var pathName = url.parse(req.url).pathname;

    //判断是否首页 - 默认首页
    if( pathName=='/' ){
        pathName = 'index.html';
    }

    fs.readFile('./static/'+pathName,function( err,data ){

        if( err ){
            //不存在，就返回404页面
            fs.readFile('./static/404.html',function( err,data ){
                res.writeHead(404,{'Content-type':'text/html;charset=utf8'});
                res.end(data);
            });
            res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
            return false;
        }
        res.end(data);

    });

});

server.listen(1221,'127.0.0.1');
