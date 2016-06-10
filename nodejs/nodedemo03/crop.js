
var express = require('express');
var fs = require('fs');
var gm = require('gm');


var app = express();

app.set('view engine','ejs');

app.use(express.static('./src'));

//显示 crop.ejs
app.get('/crop',function ( req,res ) {

	res.render('crop.ejs');

});

app.get('/docut',function ( req,res ) {

	//fileName , x , y , w , h
	var fileName = req.query.fileName;
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	var w = parseInt(req.query.w);
	var h = parseInt(req.query.h);

	gm('./pic/axin.jpg')
		.crop(w,h,x,y)
		// .resize(100,100,'!')
		.write('./pic/'+ fileName + '_cut' + Math.random()*100+10 + '.jpg',function ( err ) {

		if ( err ) {

			res.send('-1');

			return ;

		}

		res.send('1');

	});


});




app.listen(80);



