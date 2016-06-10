

var fs = require('fs');

var gm = require('gm');


//缩略图
/*gm('./axin.jpg')
	.resize(250,250)
	.write('./axin1.jpg',function ( err ) {

		console.log( err );

		if ( err ) {

			console.log( '操作错误' );

		}

	});*/


gm('./123.jpg').crop(100,100,60,60).write('./2.jpg',function ( err ) {

	console.log(err);

});

