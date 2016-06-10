
var express = require('express');

var crypot = require('crypto');

var formidable = require('formidable');

var app = express();

var db = require('./model/db.js');


app.set('view engine','ejs');

app.use( express.static('./src') );

//注册页面
app.get('/regist',function ( req,res,next ) {

	res.render('regist.ejs');

});

//登陆页面
app.get('/login',function ( req,res,next ) {

	res.render('login2.ejs');

});

//执行注册
app.get('/doregist',function ( req,res,next ) {

	var username = req.query.username;
	var password = req.query.password;

	//加密
	password = md5( md5(password).substr(4,7) + md5(password) );

	db.insertOne('user',{

		'usernmae': username,

		'password': password

	},function ( err,result ) {

		if ( err ) {

			res.send('-1');

			return false;

		}

		res.send('1');

	});

});


app.post('/dologin',function ( req,res ) {

	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {

		var usernmae = fields.username;
		var password = fields.password;

		//按用户名检索数据库，查看密码是否匹配
		db.find('user',{'usernmae': usernmae},function ( err,result ) {

			if ( result.length == 0 ) {

				res.send('-2');  //-2 没有这个人

				return false;

			}

			var sjkPassword = result[0].password;

			password = md5( md5(password).substr(4,7) + md5(password) );

			if ( password == sjkPassword ) {

				res.send('1');//成功

			} else {

				res.send('-1'); //密码不匹配

			}

		});

	});

});

app.listen(80);



function md5 ( mm ) {

	var md5 = crypot.createHash('md5');

	var password = md5.update(mm).digest('base64');

	return password;

}