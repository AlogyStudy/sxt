
var http = require('http');
var fs = require('fs');

var server = http.createServer(function( req,res ){
    if( req.url == '/favicon.ico' ) return false;

    var wenjianjia = [];

    fs.readdir('./album',function( err,files ){
        //files 是数组，表示这个./album这个文件夹中的所有东西.
        //包括文件或文件夹
        for( var i=0; i<files.length; ++i ){
            var theFileName = files[i];

            fs.stat('./album/'+ theFileName,function( err,stat ){
                if( stat.isDirectory() ){
                    wenjianjia.push(theFileName);
                }
            });
        }

    });

    res.end();
});


server.listen(1221,'127.0.0.1');

