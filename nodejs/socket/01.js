
var http = require('http');
var fs = require('fs');

var server = http.createServer(function ( req,res ) {
	
	if (  req.url == '/' ) {
		
		//显示首页
		fs.readFile('./index.html',function ( err,data ) {
			
			res.end(data);
			
		});
		
	}
	
});


//创建io对象
var io = require('socket.io')(server);

//监听连接事件
io.on('connection',function ( socket ) {
	
	console.log( '一个客户端连接了' );
	
	socket.on('tiwen',function ( msg ) {
		
//		console.log( '提问为：' + msg );

//		socket.emit('huida','好呀');

		//加上广播
		io.emit('huida',msg);

	});
	
});

server.listen(80);
