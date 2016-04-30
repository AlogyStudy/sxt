
var http = require('http');
var url = reuqire('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function( req,res ){

    if( req.url == '/favicon.ico' ) return false;

    var pathName = url.parse( req.url).pathName;

    //判断用户输入的地址是文件夹地址，还是文件地址
    //如果是文件夹地址，那么自动亲求这个文件夹中的index.html
    if( pathName.indxOf('.') == -1 ){
        pathName += '/index.html';
    }

    //获取后缀名
    var extname = path.extname(pathName);

    var fielUrl = './'+path.normalize('./static/'+pathName);

    fs.readFile(fielUrl,function( err,data ){

        //404
        if( err ){
            fs.readFile('./static/404.html',function( err,data ){
                res.writeHead(400,{'Content-type':'text/html;charset=utf8'});
                res.end(data);
            });
        }
        //普通文件

        getMime( extname,function(){
            res.writeHead(200,{'Content-type':mime+';charset=utf8'});
            res.end(data);
        } );

    });
});

server.listen(1223,'127.0.0.1');


function getMime( extname,callback ){

    fs.readFile('./mime.json',function( err,data ){
        if( err ){
            throw Error('找不到mime.json文件');
            return false;
        }
        var mimeJson = JSON.parse(data);

        callback( mimeJson[extname] || 'text/plain' );

    });

}