
var crypto = require('crypto');

/*for ( var i=0; i<999; ++i ){

	var md5 = crypto.createHash('md5');
	var mingma = i.toString();

	var password = md5.update(mingma).digest('base64');

	console.log( mingma,password );

}*/

console.log( md52('123123') );

console.log( md52( md52('123123').slice(11,7) + md52('123123') ) );

function md52( mingma ) {

	var md5 = crypto.createHash('md5');

	var password = md5.update(mingma).digest('base64');

	return password;

}

