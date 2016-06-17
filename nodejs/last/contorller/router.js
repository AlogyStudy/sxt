
var Student = require('../models/Student.js');

var Kecheng = require('../models/Kecheng.js');

/*Kecheng.create({'kid': 100, 'name': '美术课'});
Kecheng.create({'kid': 101, 'name': '音乐课'});
Kecheng.create({'kid': 102, 'name': '体育课'});
*/

exports.showIndex = function ( req,res,next ) {
	
	
	Student.find({},function ( err,reslut ) {
		
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
		
		Kecheng.find({},function ( err,reslut2 ) {
			
			if ( err ) {
				
				res.send('查询错误');
				
				return ;
				
			}
			
			res.render('edit.ejs',{
				'student': reslut,
				'quanbuKecheng': reslut2 
			});
			
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
	
	//查询有多少种课程
	Kecheng.find({},function ( err,reslut ) {
	
	console.log(reslut);
	
		if ( err ) {
			
			res.send('查询错误');
			
			return ;
			
		}
		
		res.render('add.ejs',{
			'quanbuKecheng': reslut 
		});
		
	});
	
	
}

//执行插入
exports.doadd = function ( req,res,next ) {
	
	//存储数据
	Student.create(req.query,function ( err,reslut ) {
		
		//在课程中，添加此人。
		Kecheng.tianjiaXueSheng(req.query.Kechengs,req.query.sid,function () {
			
			res.send('课程添加报名学生成功');
			
		});
		
	});
	
}


