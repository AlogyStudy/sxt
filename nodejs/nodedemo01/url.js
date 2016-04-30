
var http = require('http');
var url = require('url');

var server = http.createServer(function( req,res ){
    //url.parse(); 分为很多部分,
    //host, port , pathname ,path
    var path = url.parse(req.url).pathname;
    //url.parse(); 如果第二个参数是true，那么就可以将所有的查询变为对象。就可以直接得到这个参数.

    var query = url.parse(req.url,true).query;
    var id = query.id;

    console.log('pathname:'+ path );
    console.log('query:'+ query );
    console.log( 'id:'+id );
    res.end();

});

server.listen(1221,'127.0.0.1');

