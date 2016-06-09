

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

	var page = parseInt( req.query.page ) || 0;

	db.find('student',{},{'pageamount': 5, 'page': page},function ( err,result ) {

		if ( err ) {

			res.send(err);

			return ;

		}

		res.json(result);

	});

});

app.get('/shan',function( req,res ){

	var id = req.query.id;

	db.deleteMany('student',{'name': id}, function( err,result ){

		res.send(result);

	});

});

app.get('/update',function( req,res ){

	db.updateMany('student',{'name': 'mm'},{$set: {'name': 'yro'}},function( err,result ){

		if ( err ) {

			res.send(err);

			return ;

		}

		res.send(result);

	})

});

app.listen(80);