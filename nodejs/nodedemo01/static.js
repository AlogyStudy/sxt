
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function( req,res ){

    if( req.url == './favicon.ico' ) return false;
    //获取路由
    var pathName = url.parse(req.url).pathname;

    //判断是否首页 - 默认首页
    if( pathName=='/' ){
        pathName = 'index.html';
    }

    var extName = path.extname(pathName);

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

        getMime(extName,function( mime ){
            res.writeHead(200,{'Content-type': mime +';charset=utf8'});
            res.end(data);
        });

    });
});

server.listen(1221,'127.0.0.1');


function getMime( extname,callback ){

    fs.readFile('./mime.json',function( err,data ){
        if( err ){
            throw Error(err);
            return false;
        }
        var dataJson = JSON.parse(data);
        callback && callback( dataJson[extname] || 'text/plain' );

    });

    /*switch (extname){
        case '.html':
        return 'text/html';
    break;
        case '.jpg':
        return 'images/jpg';
    break;
        case '.css':
        return 'text/css';
    break;
        case '.js':
        return 'text/js';
     break;
    }*/
}
