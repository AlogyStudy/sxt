
var Book = require('../modles/Book.js');

exports.showIndex = function ( req,res,next ) {
	
	Book.findBook(function ( err,result ) {
		
		res.render('index.ejs',{
			'tushu': result
		});
		
	});
	
	
}

exports.addBook = function ( req,res,next ) {
	
	res.render('addbook.ejs');
	
}


exports.doadd = function ( req,res,next ) {
	
	Book.create(req.query,function ( err ) {
		
		if ( err ) {
			
			res.send( '创建失败' );
			
			return ;
			
		}
		
		res.send('保存成功');
		
	});
	
}

//修改界面
exports.edit = function ( req,res,next ) {
	
	var name = req.query.name;
	
	Book.findBookByName(name,function ( err,reslut ) {
	
		res.render('edit.ejs',reslut[0]);
		
	});
	
	
}

exports.doedit = function ( req,res,next ) {

	Book.update(req.query.name,function ( err,reslut ) {
		
		
		
	});

}




