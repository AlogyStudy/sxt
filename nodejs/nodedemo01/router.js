
var http = require('http');

var server = http.createServer(function( req,res ){

    //用户路径
    var userUrl = req.url;

    //RegExp

    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});

    if( userUrl.substr(0,9) == '/student/' ){
        var studentId = userUrl.substr(9);
        if( /^\d{10}$/.test( studentId ) ){
            res.end('您要查询学生信息，id为：'+studentId);
        } else {
            res.end('学生学号位数不对');
        }
    } else if( userUrl.substr(0,9) == '/teacher/' ){
        var teacherId = userUrl.substr(9);
        if( /^\d{6}$/.test(teacherId) ){
            res.end('您要查询的教师信息为：'+teacherId);
        } else {
            red.end('你查询的教师信息位数不对');
        }
    } else {
        res.end('请检查url');
    }

});

server.listen(1221,'127.0.0.1');


