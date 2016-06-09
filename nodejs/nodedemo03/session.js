
var express = require('express');

var app = express();

var session = require('express-session');

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}));


app.get('/',function( req,res ){

	console.log(1,req.session.login);

	if ( req.session.login == '1' ) {

		res.send( '欢迎'+ req.session.username +'的登陆' );

	} else {

		res.send('没有成功登陆');

	}


});

app.get('/login',function ( req,res ) {

	req.session.login = '1';
	req.session.username = 'mlln';

	console.log( req.session );

	res.send('你已经成功登陆');

});


app.listen(80);


