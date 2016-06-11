
var Student = require('../models/Student.js');

exports.showIndex = function ( req,res,next ) {
	
	Student.find({},function ( err,reslut ) {
		
		if ( err ) {
			
			res.send('出现错误');
			
			return ;
			
		}
		
		//渲染
		res.render('index.ejs',{
			
			students: reslut 
			
		});
		
	})
	
	
}

//显示修改
exports.edit = function ( req,res,next ) {
	
	//执行修改
	var sid = parseInt( req.params['sid'] );
	
	Student.findOne({'sid': sid},function ( err,reslut ) {
		
		if ( err || !reslut ) {
			
			res.send('sid错误');
			return ;
			
		}
			
		res.render('edit.ejs',{
			'student': reslut			
		});
		
	});
	
	
}

//修改
exports.doedit = function ( req,res,next ) {
	
	var sid = parseInt( req.params['sid'] );
	
	Student.update({'sid': sid},req.query,function ( err,relust ) {
		
		if ( err ) {
			
			res.send('修改失败');
			
			return ;
			
		}
		
		res.send('修改成功');
		
	});
	
}

//删除
exports.remove = function ( req,res,next ) {

	var sid = parseInt(req.params['sid']);
	
	Student.remove({'sid': sid},function ( err ) {
		
		if ( err ) {
			
			res.send('删除失败');
			
			return ;
			
		}
		
		res.send('删除成功');
		
	});

}


exports.showAdd = function ( req,res,next ) {
	
	res.render('add.ejs');
	
}

//执行插入
exports.doadd = function ( req,res,next ) {
	
	//存储数据
	Student.create(req.query,function ( err,reslut ) {
		
		res.send('插入成功');
		
	});
	
}


