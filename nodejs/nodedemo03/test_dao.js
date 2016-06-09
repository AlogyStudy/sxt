

var express = require('express');

var db = require('./model/db.js');

var app = express();

app.get('/',function ( req,res ) {

	db.insertOne('student',{
		'name': 'ickt'
	},function ( err,result ) {

		if ( err ) {

			console.log('插入失败');

			return false;

		}

		res.send('插入成功');

	})

});


app.get('/du',function ( req,res ) {

	var page = parseInt( req.query.page );

	//读取全部数据，只展示一部分，开销很大。 mongodb提供了limit() skip();
	var z = [];

	db.find('student',{},function ( err,result ) {

		//result 数组

		for ( var i = page * 10; i<10* (page+1); i++ ) {

			z.push(result[i]);

		}

		res.send(z);

	});

});

app.listen(80);