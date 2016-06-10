
var mongoose = require('mongoose');

//创建数据库
var db = mongoose.createConnection('mongodb://127.0.0.1/tushu');

db.once('open',function ( callback ) {
	
	console.log('数据库连接成功');
	
});

module.exports = db;
