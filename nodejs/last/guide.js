
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mlln');

var db = mongoose.connection;

db.on('open',function ( callback ) {

	console.log('数据库成功打开');

});

var blogSchema = new mongoose.Schema({
	tiele: String,
	author: String,
	body: String,
	comments: [{body: String, date: Date}],
	date: {type: Date, dafault: Date.now},
	hideen: Boolean,
	meta: {
		votes: Number,
		favs: Number
	}
});

blogSchema.methods.showInfo = function ( cb ) {
	
	console.log(this);
	
}

var Blog = mongoose.model('Blog',blogSchema);
 
//module.exports = Blog;

var blog = new Blog({
	'title': '博客test',
	'author': 'llling'
});

//blog.save();

blog.showInfo();
