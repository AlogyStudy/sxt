
var mongoose = require('mongoose');


//创建模式 StudentSchema
var studentSchema = new mongoose.Schema({
	'sid': Number,
	'name': String,
	'age': Number,
	'sex': String
});

//建立索引
studentSchema.index({'sid': 1});

//创建module
var Student = mongoose.model('Student',studentSchema);

module.exports = Student;
