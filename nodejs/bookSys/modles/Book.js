
var mongoose = require('mongoose');
var db = require('./db.js');

//创建 模式 ，字段
var BookSchema = new mongoose.Schema({
	
	name: { type: String },
	
	author: { type: String },
	
	price: { type: Number },
	
//	type: { type: Array, 'default': [] }
	
});

//给schema增加几个方法
//列出所有图书
BookSchema.statics.findBook = function ( callback ) {
	
	this.model('book').find({},callback);
	
}

//根据_id查找图书
BookSchema.statics.findBookByName = function ( name,callback ) {
	
	this.model('book').find({name: name},callback);
	
}

//建立模型
var BookModel = db.model('book',BookSchema);

module.exports = BookModel;

