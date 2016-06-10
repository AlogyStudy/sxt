
var mongoose = require('mongoose');

var db = require('./db.js');

//创建一个schema结构。 schema--模式
var StudentSchema = new mongoose.Schema({
	
	name: {type: String, default: '匿名用户'},
	
	age: { type: Number },
	
	sex: { type: String }
	
});


/**
 * 创建方法
 * @param {Object} name
 * @param {Object} callback
 */
StudentSchema.statics.zhaoren = function ( name,callback ) {
	
	
	this.model('Student').find({'name': name},callback);
	
}

//创建修改方法
StudentSchema.statics.xiugai = function ( conditions,update,options,callback ) {
	
	this.model('Student').update(conditions,update,options,callback);
	
}


var studentModel = db.model('Student',StudentSchema);

module.exports = studentModel;

