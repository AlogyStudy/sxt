
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ssgl');

var db = mongoose.connection;

db.once('open',function ( cb ) {
	
	console.log( '数据库打开成功' );
	
});


module.exports = db;
