/**
 * var sd = require('silly-datetime');
 sd.format(new Date(), 'YYYY-MM-DD HH:mm');
 */

//需求：使用一个日期时间： 格式为：20150920110632

var sd = require('silly-datetime');

var tt = sd.format( new Date(),'YYYYMMDD-HHmm' );

console.log(tt);






