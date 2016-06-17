
var mongoose = require('mongoose');


//创建模式 StudentSchema
var KechengSchema = new mongoose.Schema({
	'kid': Number,
	'name': String,
	'student': [Number] //这个数组存放的是学生的sid
});

//建立索引
KechengSchema.index({'kid': 1});

KechengSchema.statics.tianjiaXueSheng = function ( kidArray,sid,cb ) {
	
	for ( var i=0; i<kidArray.length; i++ ) {
		
		Kecheng.update({'kid': kidArray[i]},{$push: {'student': sid}},cb);
		
	}
		
};

//创建module
var Kecheng = mongoose.model('Kecheng',KechengSchema);

module.exports = Kecheng;
