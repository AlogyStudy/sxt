var http = require('http');
var url = require('url');


var server = http.createServer(function( req,res ){

    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var sex = queryObj.sex;

    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('服务器收到表单请求: name:'+ name +'age:'+ age +'sex:'+ sex);

});

server.listen(1221,'127.0.0.1');