
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mlln');

var db = mongoose.connection;

db.on('open',function ( callback ) {

	console.log('数据库成功打开');

});

var blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	body: String,
	comments: [{body: String, date: Date}]
});

/**
 * 
 * @param {Object} obj 评论对象
 * @param {Object} cb
 */
blogSchema.methods.pinglun = function ( obj ) {
	
	this.comments.push(obj);
	
	this.save();
	
}

var Blog = mongoose.model('Blog',blogSchema);
 
//module.exports = Blog;

var blog = new Blog({
	'title': '哈哈哈哈',
	'author': 'llling',
	'body': '哈哈哈哈哈哈哈哈'
});

//blog.save();


//第一条论评
/*blog.pinglun({body: '评论内容','date': new Date()});
*/

//添加第二条评论
Blog.findOne({'title': '哈哈哈哈'},function ( err,blog ) {
	
	if ( !blog ) {
		return ;
	}
	
	blog.pinglun({'body': '第二条评论了', 'date': new Date()});
	
});
