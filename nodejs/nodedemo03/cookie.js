
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/',function ( req,res ) {

	// maxAge 在express 是以毫秒为单位
	res.send('猜你喜欢' + req.cookies.mudidi );

});


app.get('/gonglve',function ( req,res ) {

	var mudidi = req.query.mudidi;

	//记录用户的喜好
	//读取用户的喜好，然后把新的数据push设置新的数据
	var mudidiArr = req.cookies.mudidi || [];

	mudidiArr.push( mudidi );

	res.cookie('mudidi',mudidiArr,{
		'maxAge': 9000,
		httpOnly: true
	});

	res.send(mudidi + '旅游攻略');

});


app.listen(80);


