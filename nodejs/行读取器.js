//系统的行结束符，windows为\r\n，unix和unix-like为\n，mac和ios为\r
var RETURN=0x0d; //   Ascii码 回车键
var NewLine=0x0a; // \r windows换行符
var fs=require("fs");
var util=require('util');
var EventEmitter=require('events').EventEmitter;
var os=require('os');
function LineReader(path){
    this._fd=fs.openSync(path,'r');
}

util.inherits(LineReader,EventEmitter);
console.log(LineReader.prototype);
LineReader.prototype.on('newListener',function(name,func){
    if(name=='readLine'){
        var self = this;
        process.nextTick(function(){
            var line=[];
            var ch=new Buffer(1);
            while(fs.readSync(self._fd,ch,0,1,null)>0){
                if(ch[0]==RETURN||ch[0]==NewLine){
                    self.emit('readLine',Buffer.concat(line).toString());
                    line=[];
                    if(os.type()=='Windows_NT'){
                        fs.readSync(self._fd,ch,0,1,null);
                    }
                }else{
                    var buf=new Buffer(1);
                    ch.copy(buf);
                    line.push(buf);
                }
            }
        });
    }
})
var reader=new LineReader('./msg');

reader.on('readLine',function(data){
    console.log(data);
})



