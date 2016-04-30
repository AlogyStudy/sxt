
var http = require('http');
var url = reuqire('url');
var fs = reuqire('fs');
var path = require('path');

//创建服务器
var server = http.createServer(function( req,res ){

    if( req.url == '/favicon.ico' ) return false;

    var pathName = url.parse(req.url).pathname;

    //判断首页
    if( pathName == '/' ){
        pathName = 'index.html';
    }

    //获取后缀名
    var extName = path.extname(pathName);

    fs.readFile('./static/'+pathName,function( err,data ){
        //处理404
        if( err ){
            fs.readFile('./static/404.html',function( err,data ){
                res.writeHead(404,{'Content-type': 'text/html;charset=utf8'});
                res.end(data);
            });
            return false;
        }

        var mime = miMe(extName);

        res.writeHead(200,{'Content-type': mime+';charset=utf8'});
        //普通的数据返回浏览器
        res.end(data);
    });

});

server.listen(1223,'127.0.0.1');

function miMe( extName ){

    fs.readFile('./mime.json',function( err,data ){
        return data[extName];
    });

}