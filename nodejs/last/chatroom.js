
var express = require('express');

var app = express();

//socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

//session
var session = require('express-session');

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

//模版引擎
app.set('view engine','ejs');

//显示首页
app.get('/',function ( req,res,next ) {
	
	res.render('chatroom.ejs');
	
});

var allUser = [];

//确认登陆，session，是否有用户名，并且昵称不能重复
app.get('/check',function ( req,res,next ) {
	
	var yonghuming = req.query.yonghuming; 
	
	if ( !yonghuming ) {
		
		res.send('必须填写用户名');
		
		return ;
		
	}
	
	
	if ( allUser.indexOf(yonghuming) != -1 ) {
		
		res.send('用户名已经被占用');
		
		return ;
		
	}
	
	//添加到数组
	allUser.push( yonghuming );
	
//	给予session
	req.session.yonghuming = yonghuming;
	
	res.redirect('/chat');
	
});

//聊天室
app.get('/chat',function ( req,res,next) {
	
	if ( !req.session.yonghuming ) {
		
		res.redirect('/');
		
		return ;
		
	}
	
	res.render('char.ejs',{
		'yonghuming': req.session.yonghuming
	});
	
});

//socket
io.on('connection',function ( socket ) {
	
	socket.on('liaotian',function ( msg ) {
		
		//把接收到的msg原样广播
		io.emit('liaotian',msg);
		
	});
	
});

http.listen(80);
