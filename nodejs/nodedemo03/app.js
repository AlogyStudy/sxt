
var express = require('express');

var app = express();

app.use(express.static('./public'));

app.get('/',function( req,res ){




});


app.use(function( req,res ){

	res.status('404');

	res.send('404');

});

app.listen(80);

