
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/xuanke');

var db = mongoose.connection;

db.on('open',function ( callback ) {

	console.log('数据库成功打开');

});

//学生Schema
var xueshengSchema = new mongoose.Schema({
	
	'name': String,
	'age': Number,
	'sex': String
	
});

var Student = mongoose.model('Student',xueshengSchema);


//学生，课程
var kechengSchema = new mongoose.Schema({
	'name': String,
	'info': String,
	'student': [xueshengSchema]
});


kechengSchema.methods.tianjiaStudent = function ( studentObj,cb ) {
	
	this.student.push(studentObj);
	
	this.save(function () {
		
		cb();
		
	});
	
}

var Kecheng = mongoose.model('Kecheng',kechengSchema);


//实例化student
/*Student.create({'name': '小明','age': 23, 'sex': '男'});
Student.create({'name': '小红','age': 14, 'sex': '女'});
Student.create({'name': '小绿','age': 20, 'sex': '男'});
Student.create({'name': '小刚','age': 22, 'sex': '男'});
*/

var xiaoqiang = new Student({'name': '小强','age': 18, 'sex': '男'});
xiaoqiang.save();

var shuxue = new Kecheng({
	'name': '数学课',
	'info': '学习数学 ',
});

shuxue.tianjiaStudent(xiaoqiang,function () {
	
	console.log('添加成功');
	
});