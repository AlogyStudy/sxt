var Interface = function ( name,methods ) {

//判断接口参数个数
if ( arguments.length != 2 ) {
	
	throw new Error('this instance interface constructor arguments must be 2 length!');
	
}

this.name = name;
this.methods = []; //定义一个内置函数的空数组对象，等待接收methods里的元素(方法名字)

for ( var i=0,len = methods.length; i<len; i++ ) {
	
	if ( typeof methods[i] !== 'string' ) {
		
		throw new Error('the interfalce method name is error!');
			
		}
		
		this.methods.push(methods[i]);
			
	}
	
}


//接口静态方法
Interface.ensureImplements = function ( obj ) {

//如果检测方法接受的参数小于2个   参数传递失败!  至少实现 一个接口
if ( arguments.length < 2 ) {
	
	throw new Error('Interface.ensureImplements method construcotr arugmetns must be >= 2!');
	
}				

//获得接口实例对象  ,获得接口实例对象中的方法。
for ( var i=1; i<arguments.length; i++ ) {
	
	var instanceInterface = arguments[i];
	
	//判断参数，是否是接口类的类型
	if ( instanceInterface.constructor !== Interface ) {
		
		throw new Error('the arguments constrouctor not Interface Class');
		
	}
	
	//循环接口实例对象里面的每一个方法
	//判断 obj中的 方法，是否跟接口中的 方法一致。
	for ( var j=0,len = instanceInterface.methods.length; j<len; j++ ) {
		//接收每一个方法的名字。(是字符串)
		var methodName = instanceInterface.methods[j];
		
		if ( !obj[methodName] || typeof obj[methodName] !== 'function' ) {  //typeof obj[methodName] !== 'function' 屏蔽 c1.add = 2;
			 
			throw new Error('the method name "'+ methodName +'" is not found!');
				
			}
			
		}
		
	}
	
}




