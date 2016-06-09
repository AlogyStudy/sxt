
var express = require('express');

var MongoClient = require('mongodb').MongoClient;

var app = express();



app.get('/',function( req,res ){

	res.send('ok');

	//数据库的地址  /student 表示数据库
	//假如数据库不存在，没有关系，程序会自动创建数据库
	var url = 'mongodb://localhost:27017/student';

	//连接数据库
	MongoClient.connect(url,function( err,db ){

		if ( err ) {
			console.log('数据库连接失败');
			return ;
		}

		//db 参数就是连接上数据库 实体
		console.log('数据库连接成功');

		//插入数据， 集合如果不存在，也没有关系，程序会帮助你创建
		db.collection('student').insertOne({

			'name': 'daidai',
			'age': parseInt(Math.random()* 100 + 10)

		},function( err,result ){

			if ( err ) {

				console.log('插入失败');

				return ;

			}

			//插入之后，reslut 表示插入结果
			console.log( result );

			res.send('插入数据成功');

			db.close();

		});



	});


});


app.listen(80);
