
var db = require('./model/db.js');

var Student = require('./model/Student.js');

//var xm = new Student({'name': 'xm', 'age': 13, 'sex': 'nan'});

/*xm.save(function () {
	
	console.log('存储成功');
	
});
*/

/*Student.create({ 'name': 'zf1', 'age': 23, 'sex': '女' } , function ( err ) {

	console.log('ok');
	
});
*/

/*Student.zhaoren('zf',function ( err,reslut ) {
	
	console.log( reslut );
	
});
*/
Student.xiugai({'name': 'xm'},{$set: {'age': 33}}, {},function ( err,reslut ) {
	
	console.log( err,reslut );
	console.log('ok-xiugai');
	
});

 