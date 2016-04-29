//javascript document

/**
 *  Ryo 命名空间 	namepace
 *  @param 
 */

var Ryo={};

//1 接口类.  interface   -- Class interface ==> 目的实例化n多个各种各样的接口.  
//定义一个类， 类作为一个接口的一个基类.  通过类去实例化 n多个接口实例.
/*
 * Interface Class
 * 
 *	接口类需要两个参数么?
 * 参数1，接口的名字，
 * 参数2，接收方法名称的集合(数组)
 *
 *  写一个接口的 目的 无非是写一些 抽象方法.
 * */
Ryo.Interface = function(name, methods) { //methods 的名字必须是String类型的可以.
	if (arguments.length != 2) {
		throw new Error('the instance Interface constructor arguments must be 2 length!');
	};
	this.name = name;
	this.methods = []; //定义一个内置的空数组对象，等待接受methods里的元素 (方法名字);
	for (var i = 0; i < methods.length; ++i) {
		if (typeof methods[i] !== 'string') {
			throw new Error('ths Interface method name is error');
		};
		this.methods.push(methods[i]);
	};
};

	/**
		Interface static method
		@param 
	 */

//检验通过， 不做任何操作， 代码继续执行.   不通过，抛出异常， Error.    //这个方法的目的，就是检测方法的 .
Ryo.Interface.ensureImplements = function(obj) { //核心检验方法.
	if (arguments.length < 2) {//如果检测的方法接受的参数小于2个， 参数传递失败.
		throw new Error('Interface.ensureImplements method constructor arguments must be >= 2!');
	};
	//获得接口实例对象，通过接口实例对象， 得到接口实例对象里的方法.
	for (var i = 1; i < arguments.length; ++i) {
		var instanceInterface = arguments[i];
		//判断参数 是否是接口类的  类型. 是否是 接口类的构造函数.
		if (instanceInterface.constructor != Ryo.Interface) {
			throw new Error('the arguments constructor not be Interface Class');
		};
		//循环接口实例对象的每一个方法 .
		for (var j = 0; j < instanceInterface.methods.length; ++j) {
			//用一个临时变量接收每一个方法的名字，注意是字符，并不是函数.
			var methodName = instanceInterface.methods[j];
			//object[key];
			if (!obj[methodName] || typeof obj[methodName] !== 'function') {
				//对象没有这个方法.
				throw new Error('the method name ' + methodName + ' is not found!');
			};
		};
	}
}


/**
	extend method
	@param 
 */

Ryo.extend=function(son, person) {
	//目的: 实现只继承父类的原型对象 .
	//person.prototype
	//1,用一个空函数作为中转.
	var F = new Function(); //创建一个空个函数.  //目的进行中转 (  )
	//2,实现空函数和超类的原型对象转换.
	F.prototype = person.prototype;
	//3,原型继承.
	son.prototype = new F(); //模板为空，只有父类的原型.
	//4,还原子类的构造器.
	son.prototype.constructor = son;
	//5,保存 一下父类的原型对象 ，  因为: 一方面方便解耦， 另一方面 方便获得父类的原型对象.
	son.superClass = person.prototype; //自定义一个子类的静态属性. 接受父类的原型对象.
	//判断父类的原型对象 ， 加保险.
	if (person.prototype.constructor == Object.prototype.constructor) {
		person.prototype.constructor = person; //手动还原父类的原型构造器.
	};
};


/*
 * 
 * @param
 * 单体模式
 * 实现一个跨浏览器的事件处理程序.
 * 
 * */

Ryo.EventUtil={
	addHandler: function( el,type,fn ){
		//addHandler(el,type,fn);
		if( el.addEventListener ){
			//ff
			el.addEventListener(type,fn,false);
		} else if( el.attachEvent ){ 
			//ie
			el.attachEvent('on'+type,fn);
		};
		
	},
	removeHandler: function( el,type,fn ){
		//removeHandler(el,type,fn);
		if( el.removeEventListener ){
			//ff
			el.removeEventListener(type,fn,false);
		} else if( el.attachEvent ){
			//ie
			el.detachEvent('on'+type,fn);				
		};	
	}
}




/**
 * 扩展Array的原型对象   添加遍历数组的每一个元素， 并让每一个元素都执行fn函数.(可遍历多维数组)
 * 
 * 
 */

Array.prototype.each=function( fn ){
	
	try{
		
		//1 目的 ，遍历数组的每一项.
	this.i || (this.i=0); //计数器  记录当前遍历的元素的位置.   //var i=0;   在底层  使用  this.
	
	//2 严谨的判断 ，什么时候去走each 核心方法.
	if( this.length > 0 && fn.constructor == Function ){  //当数组的函数  大于0 并且传递的参数 必须是为函数.
		
		//循环遍历数组的每一项.
		
/*						for( var i in this ){   //能不用forIn循环就不用forIn循环.
							
						};*/
		
		// while 循环的范围
		while ( this.i<this.length ){
			//核心代码.
			
			//获取数组的每一项.
			var e=this[this.i];
			//如果当前元素获取到了，并且当前元素是一个数组.
			if( e && e.constructor == Array ){
				//直接做递归操作.
				e.each(fn);
			} else {
				//如果不是数组.  单个元素.
//								fn.apply(null,[e]);

/*								var obj=true;
								fn.apply(obj,[e]);*/
				
				fn.apply(e,[e]);  //这儿的目的就是为了把数组当前元素传递给fn函数， 并函数执行.
				//fn.call(e,e);
			}
			this.i++;
		};
		this.i=null;  //释放内存， GC回收机制回收变量
	}
}catch(e){
	//TODO handle the exception
	console.error('error');					
	}
	return this;
}
