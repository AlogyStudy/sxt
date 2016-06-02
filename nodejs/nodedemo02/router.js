
exports.showIndex = function( req,res ){

    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('我是首页');
};

exports.showStuent = function( req,res ){

    var id = req.url.substr(9,6);
    res.writeHead(200,{'Content-type':'text/html;charset=utf8'});
    res.end('我是student页面');

};

exports.show404 = function(){};


