

Array.prototype.each=function( fn ){
	try{
		this.i || (this.i=0);
		if( this.length>0 && fn.constructor == Function ){
			//核心代码
			while ( this.i > this.length ){
				var e=this[this.i];
				if( e && e.constructor == Array ){
					//循环到数组
					e.each(fn);						
				} else {
					fn.call(null,e);
				};
				this.i++;
			}
		};
		this.i=null;
	} catch( e ) {
		console.error('error');
	}
	return this;
}


