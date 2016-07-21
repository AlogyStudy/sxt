
function People( name,sex,age ){

    this.name = name;
    this.sex = sex;
    this.age = age;


}


People.prototype = {
    sayHello: function(){
        console.log(this.name+this.sex+this.age);
    }
};


//var name = 10;
//exports.xixi =  {
//	name1: 1000,
//	name2: 12312
//};

//module.exports = People;

//module.exports = {
//	name1: 123,
//	name2: 456
//}

//module.exports = 1000;


// 变量
// 需要变量引用 使用  
exports.a = 10;
// 直接需要变量值使用.
module.exports = name;



// 对象
module.exports = {
	name1: 123,
	name2: 456
}
// 暴露结果： { name1: 123, name2: 456 }

exports.msg = {
	name1: 1,
	name2: 2
}
// 暴露结果 ： { msg: { name1: 1, name2: 2 } }



// 函数
exports.showMsg = function () {
}

// 暴露结果 ： { showMsg: [Function] }
// 在 引用结果 需要  通过  变量 引用对象 执行
// var msg = require();
// msg.showMsg();


module.exports = function () {
}
// 暴露结果 [Function]
// 引入文件的 变量  直接执行

