

var express = require('express');

var db = require('./model/db.js');

var app = express();


app.set('view engine','ejs');

app.get('/login',function( req,res ){

	res.render('login.ejs');

});

app.get('/checklogin',function ( req,res ) {

	var newUsername = req.query.username;
	var newPass = req.query.pass;

	db.find('user',{'username': newUsername},function (err,reslut) {

		console.log( reslut );

		if ( reslut.length == 0 ) {

			res.send('您的登录名写错了，没有这个用户');

			return false;

		}

		var sjkPass = reslut[0].pass;

		if ( sjkPass == newPass ) {

			res.send('你成功登陆，你是：' + reslut[0].username);

		} else {

			res.send('密码错误！');

		}

	});

});

app.listen(80);

