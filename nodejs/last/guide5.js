
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


//实例方法。 //自己保存自己.
xueshengSchema.methods.zhangyishui = function () {
	
	this.age ++;
	
	this.save();
	
}

var Student = mongoose.model('Student',xueshengSchema);


//学生，课程
var kechengSchema = new mongoose.Schema({
	'name': String,
	'info': String,
	'student': [xueshengSchema]
});


//添加学生
kechengSchema.methods.tianjiaStudent = function ( studentObj,cb ) {
	
	this.student.push(studentObj);
	
	this.save(function () {
		
		cb();
		
	});
	
}

//找学生
kechengSchema.methods.zhaoxuesheng = function ( num,cb ) {
	
	//找到的 学生类的 对象。
	//暗含了Student对象 
	Student.findOne({'name': this.student[num].name},function ( err,reslut ) {
		
		cb(err,reslut);
		
	});
	
}

//课程模型
var Kecheng = mongoose.model('Kecheng',kechengSchema);

//实例化小明
/*var xiaoming = new Student({'name': '小明','age': 12, 'sex': '男'});
xiaoming.save();


var shuxue = new Kecheng({
	'name': '数学课',
	'info': '学习数学 ',
});

shuxue.tianjiaStudent(xiaoming,function () {
	
	console.log('添加成功');
	
});*/

//寻找小强
/*Student.findOne({'name': '小明'},function ( err,student ) {
	

		student.zhangyishui();
	
});
*/

Kecheng.findOne({'name': '数学课'},function ( err,kecheng ) {
	
	kecheng.zhaoxuesheng(0,function ( err,result ) {
		
		result.zhangyishui();
			
	});
	
});
