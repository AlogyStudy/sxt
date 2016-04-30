
var http = require('http');
var fs = require('fs');


var server = http.createServer(function( req,res ){

    if( req.url == '/favicon.ico' ) return false;

    //遍历 album 里所有的文件夹
    fs.readdir('./album/',function( err,files ){
        //files 是存放文件夹中的数组

        var wenjianjia = [];  //存放文件夹

        //迭代器，把异步的函数，变成同步的
        (function iter( i ){
            //递归出口
            if( i == files.length ) return false;

            fs.stat('./album/'+ files[i],function( err,stat ){
                if( stat.isDirectory() ){
                    wenjianjia.push(files[i]);
                }
                iter(i+1); //递归
            });

        })(0);

    });

});

server.listen(1221,'127.0.0.1');
