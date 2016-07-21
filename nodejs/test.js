

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



var fs = require('fs');
var Q = require('Q');

var readFile = function ( file , encoding ) {
	
	var deferred = Q.defer();
	fs.readFile(file, encoding, deferred.makeNodeResolver());
	
	return deferred.promise; 
	
}

readFile('foo.txt', 'utf-8').then(function ( data ) {
	
	// success
	
	console.log( data );
	
}, function ( err ) {
	
	// error
	console.log('error:' , err);
	
});



