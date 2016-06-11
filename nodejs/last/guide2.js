
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mlln');

var db = mongoose.connection;

db.on('open',function ( callback ) {

	console.log('数据库成功打开');

});

var animalSchema = new mongoose.Schema({
	'name': String,
	'type': String
});


animalSchema.methods.zhaotonglei = function ( cb ) {
	
	this.model('Animal').find({'type': this.type},cb);
	
}

var Animal = mongoose.model('Animal',animalSchema);
 
//module.exports = Blog;

/*Animal.create({'name': '汤姆','type': '猫'});
Animal.create({'name': 'imim','type': '猫'});
Animal.create({'name': '小白','type': '狗'});
Animal.create({'name': '加菲猫','type': '猫'});
Animal.create({'name': 'snoopy','type': '狗'});
*/

//blog.save();

Animal.findOne({'name': 'imim'},function ( err,reslut ) {

	var dog = reslut;
	
	dog.zhaotonglei(function ( err,resluts ) {
		
		console.log( resluts );
		
	});
	
});
