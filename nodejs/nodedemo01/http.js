
var http = require('http');

//创建一个服务器,回调函数表示接收到请求之后做的事情
var server = http.createServer(function( req,res ){
    console.log('服务器请求'+ req.url);
    res.writeHead(200,{'content-type':'text/html;charset=utf8'});
    res.end();
});

http.createServer(function(){

});


//监听端口
server.listen(9527,'127.0.0.1');

