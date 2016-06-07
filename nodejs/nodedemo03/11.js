
var filePath = req.originalUrl;

fs.readFile('./public/'+filePath,function( err,data ){
	
	if( err ){
		
		next();
		
		return ;
		
	}
	
	res.send(data.toSting());
	
});

