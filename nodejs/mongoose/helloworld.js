
//并不需要引入mongodb
var mongoose = require('mongoose');

//链接 //默认端口 27017并不需要写
mongoose.connect('mongodb://localhost/zf');

//创建模型
//猫的模型，所有的猫，都有名字，感觉跟类一样。 名字是字符串。
var Cat = mongoose.model('Cat',{name: String});

//实例化一只猫
var kitty = new Cat({name: 'kitty2'});



//调用这只猫的save方法, 保存这只猫
kitty.save(function ( err ) {

	console.log('喵~＞▽＜');

});


var tom = new Cat({'name': 'tom'});

tom.save(function (err) {

	console.log( '123' );

});


