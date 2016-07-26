

//console.log( module.paths );
//
//'use strict';
//console.log(require);
//
//console.log(module);
//
//console.log(global);
//console.log(global.require);
//console.log(global.module);



//process.nextTick(function () {
//  console.log('nextTick延迟执行');
//});
//
//setImmediate(function () {
//  console.log('setImmediate延迟执行');
//});
//
//console.log('正常执行');


//var events = require('events');
//var fs = require('fs');
//
//var emitter = new events.EventEmitter();
//
//
//emitter.on('event_foo', function () {
//	
//	console.log(123);
//	
//});
//
////fs.readStream();
//emitter.emit('event_foo');


// 继承

//var util = require('util');
//
//var events = require('events');
//
//function Stream () {
//	
//	events.EventEmitter.call(this);
//	
//}
//
//util.inherits(Stream, events.EventEmitter);
//
////console.log( Stream );


// Promise
// then

//var Promise = function () {
//	
//	EventEmitter.call(this);
//	
//}
//
//util.inherits(Promise, EventEmitter);
//
//Promise.prototype.then = function ( fulfilledHandler, errorHandler, progressHandler ) {
//	
//	// 完成态
//	if ( typeof fulfilledHandler === 'function' ) {
//		
//		this.once('success', fulfilledHandler);
//		
//	}
//	
//	// 失败态
//	if ( typeof errorHandler === 'function' ) {
//		
//		this.once('error', errorHandler);
//		
//	}
//	
//	
//	// 执行
//	if ( typeof progressHandler === 'function' ) {
//		
//		this.on('progress', progressHandler);
//		
//	}
//	
//}
//
//
//
//// Deferred
//var Deferred = function () {
//	
//	this.state = 'unfulfilled';
//	this.promise = new Promise();
//	
//}
//
//Deferred.prototype.resolve = function ( obj ) {
//	
//	this.state = 'fulfilled';
//	this.promise.emit('success', obj);
//	
//}
//
//Deferred.prototype.reject = function ( err ) {
//	
//	this.state = 'failed';
//	this.promise.emit('error', err);
//	
//}
//
//Deferred.prototype.progress = function ( data ) {
//	
//	this.promise.emit('progress', data);
//	
//}
//
//
//
//



//var fs = require('fs');
//var Q = require('Q');
//
//var readFile = function ( file , encoding ) {
//	
//	var deferred = Q.defer();
//	fs.readFile(file, encoding, deferred.makeNodeResolver());
//	
//	return deferred.promise; 
//	
//}
//
//readFile('foo.txt', 'utf-8').then(function ( data ) {
//	
//	// success
//	console.log( data );
//	
//}, function ( err ) {
//	
//	// error
//	console.log('error:' , err);
//	
//});
//

//defer.prototype.makeNodeResolver = function () {
//	
//	var self = this;
//	
//	return function ( error, value ) {
//		
//		if ( error ) {
//			
//			self.reject(error);
//			
//		} else if ( arguments.length > 2 ) {
//			
//			self.resolve(array_slice(arguments,1));
//			
//		} else {
//			
//			self.resolve(value);
//			
//		}
//		
//	}
//}
//

// 继承

//var events = require('events');
//var util = require('util');
//
//function Stream () {
//	events.EventEmitter.call(this);
//}
//
//util.inherits(Stream, events.EventEmitter);


//// 哨兵变量
//var after = function ( times, cb ) {
//	
//	var count = 0, resluts = {};
//	
//	return function ( key, value) {
//		
//		resluts[key] = value;
//		
//		count++;
//		
//		if ( coutn === times ) {
//			
//			cb(resluts);
//			
//		}
//		
//	}
//	
//}
//
//// 哨兵变量和发布/订阅模式完成多对多方案
//
//var events = require('evnets');
//
//var emitter = new events.Emitter();
//
//var done = after(times, render);
//
//emitter.on('done', done);
//emitter.on('done', other);
//
//fs.readFile(template_path, 'utf-8', function ( err, template ) {
//	
//	emitter.emit('done', 'template', template);
//	
//});
//
//db.query(sql, function ( err, data ) {
//	
//	emitter.emit('done', 'data', data);
//	
//});
//
//
//l1on.get(function ( err, resources ) {
//	
//	emitter.emit('done', 'resources', resources);
//	
//});
//
//




//exports.getCountent = function ( cb ) {
//	
//	var ep = new EventProxy();
//	
//	ep.all('tpl', 'data', function ( tpl ,data ) {
//		
//		// 成功回调
//		cb(null, {
//			template: tpl,
//			data: data
//		});
//		
//	});
//	
//	// 绑定错误处理函数
//	ep.fail(cb);
//	
//	fs.readFile('template.tpl', 'utf-8', ep.done('tpl'));
//	
//	db.get('some sql', ep.done('data'));
//	
//}



//// Connect的核心实现
//function createServer () {
//	
//	function app ( req, res ) {
//		app.handle(req,res);
//	}
//	
//	utils.merge(app, proto);
//	utils.merge(app, EventEmitter.prototype);
//	
//	app.route = '/';
//	app.stack = []; // 核心代码
//	// stack属性时服务器内部维护的中间件队列
//	
//	for ( var i=0; i<arguments.length; ++i ) {
//		app.use(arguments[i]); //  调用use()可以 将中间件放入队列中
//	}
//	
//	return app;
//	
//}

//var fs = require('fs');
//var async = require('async');
//
//// 异步串行执行
//async.series([function (cb) {
//	
//	fs.readFile('foo.txt', 'utf-8', cb);
//	
//},function ( cb ) {
//	
//	fs.readFile('foo2.txt', 'utf-8', cb);
//	
//}],function ( err, resluts ) {
//	
//	console.log( resluts );
//	
//});



//var fs = require('fs');
//var async = require('async');
//
//// 异步的并行执行
//async.parallel([function ( cb ) {
//	
//	fs.readFile('foo.txt', 'utf-8', cb);
//	
//},function ( cb ) {
//	
//	fs.readFile('foo2.txt', 'utf-8', cb);
//	
//}],function ( err, reslut ) {
//	
//	console.log( reslut );
//	
//});
//


//var EventProxy = require('eventproxy');
//var fs = require('fs');
//
//var proxy = new EventProxy();
//
//
//proxy.all('content', 'data', function ( content, data ) {
//	
//	cb(null, [content,data]);
//	
//});
//console.log( proxy );
//
//proxy.fail(cb);
//
//fs.readFile('foo.txt', 'utf-8', proxy.done('context'));
//fs.readFile('foo2.txt', 'utf-8', proxy.done('data'));
//

//var fs = require('fs');
//var async = require('async');
//
//async.waterfall([function ( cb ) {
//	
//	fs.readFile('foo.txt', 'utf-8', function ( err, content ) {
//		
//		cb(err, content);
//		
//	});
//	
//},function ( arg1, cb ) {
//	
//	fs.readFile('foo2.txt', 'utf-8', function ( err, content ) {
//		
//		cb(err, content + arg1);
//		
//	});
//	
//}],function ( err, resluts ) {
//	
//	console.log( resluts );
//	
//});




//var deps = {
//	readConfig: function ( cb ) {
//		cb();
//	},
//	connectMongoDB: ['readConfig', function ( cb ) {
//		cb();
//	}],
//	connectRedis: ['readConfig', function ( cb ) {
//		cb();
//	}],
//	complieAsserts: function ( cb ) {
//		cb();	
//	},
//	uploadAsserts: ['complieAsserts', function (cb ) {
//		cb();
//	}],
//	startup: ['connectMongoDB', 'connectRedis', 'uploadAsserts', function ( cb ) {
//		// startup
//	}]
//}
//
//async.auto(deps);



//var Step = require('step');
//var fs = require('fs');

//Step(function readFile1() {
//	
//	fs.readFile('foo.txt', 'utf-8', this.parallel());
//	
//}, function readFile2( err, content ) {
//	
//	fs.readFile('foo2.txt', 'utf-8', this.parallel());
//	
//}, function done( err, content ) {
//	
//	console.log( content );
//	
//});



//var Step = require('step');
//var fs = require('fs');
//
//Step(function readFile1() {
//	
//	fs.readFile('foo.txt', 'utf-8', this.parallel());
//	fs.readFile('foo2.txt', 'utf-8', this.parallel());
//	
//},function done( err, content1, content2 ) {
//	
//	console.log( arguments );
//	
//});


//var Bagpipe = require('bagpipe');
//
//// 设定最大并发数为10
//var bagpipe = new Bagpipe(10);
//
//for ( var i=0; i<100; i++ ) {
//	
//	bagpipe.push(async, function () {
//		// 异步回调执行
//	});
//	
//}
//
//bagpipe.on('full', function ( length ) {
//	
//	console.warn('底层系统处理不能及时完成，队列拥堵，目前队列长度为：'+ length);
//	
//});


//var fs = require('fs');
//var async = require('async');
//
//async.parallelLimit([function ( cb ) {
//	
//	fs.readFile('foo.txt', 'utf-8', cb);
//	
//},function ( cb ) {
//	
//	fs.readFile('foo2.txt', 'utf-8', cb);
//	
//}], 1, function ( err, resluts ) { // 用于限制并发数量的参数，任务只能同时并发一定数量，而不是无限制并发
//	
//	console.log( resluts );
//	
//});


//var q = async.queue(function ( file, cb ) {
//	fs.readFile('foo.txt', 'utf-8', cb);
//}, 2);
//
//q.drain = function () {
//	
//	// 完成对了中的所有任务
//	
//}
//
//fs.readdirSync('.').forEach(function ( file ) {
//	
//	q.push(file, function ( err, data ) {
//		
//		// TODO
//		
//	});
//	
//});


var usage = process.memoryUsage();

console.log( usage );
// { rss: 17170432, heapTotal: 8384512, heapUsed: 3787248 }
// rss  headTotal 已经申请到堆内存，   heapUsed 当前使用量

