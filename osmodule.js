// os modules

// var s=require("os");
// console.log(os.EOL);

var os=require('os');
console.log(os.availableParallelism());

var os=require('os');
console.log(os.arch());

var os=require('os');
console.log(os.version());

var os=require('os');
console.log(os.cpus());

var os=require('os');
console.log(os.constants);

var os=require('os');
console.log(os.devNull);

var os=require('os');
console.log(os.endianness());

var os=require("os");
console.log(os.freemem());

var os=require('os');
console.log(os.getPriority());

var os=require('os');
console.log(os.uptime());

var os=require('os');
console.log(os.userInfo());

var os=require('os');
console.log(os.homedir());

var os=require('os');
console.log(os.hostname());

var os=require('os');
console.log(os.loadavg());

var os=require('os');
console.log(os.networkInterfaces());

var os=require('os');
console.log(os.platform());

var os=require('os');
console.log(os.release());

// var os=require('os');
// console.log(os.setPriority());

var os=require('os');
console.log(os.tmpdir());

var os=require('os');
console.log(os.totalmem());

var os=require('os');
console.log(os.type());

var os=require('os');
console.log(os.version());


// fs modules
// read file
var fs=require('fs');
fs.readFile('mynewfile.txt',function(err,data){
    if(err,data) throw err;
    console.log('readed!');
    
});

// creat file
var fs=require('fs');
fs.appendFile('mynewfile0.txt','hello content',function(err){
    if(err) throw err;
    console.log('saved!');
    
});


// update file
var fs=require('fs');
fs.writeFile('mynewfile1.txt','this is my file',function(err){
    if(err) throw err;
    console.log('replaced!');
});


// delete file
var fs=require('fs');
fs.unlink('mynewfile1.txt',function(err){
    if(err) throw err;
    console.log('deleted!');
});


// rename file
var fs=require('fs');
fs.rename('mynewfile0.txt','kishan',function(err){
    if(err) throw err;
    console.log('renamed!');
});


// close file
var fs=require('fs');
fs.close('mynewfile1.txt',function(err){
    if(err) throw err;
    console.log('closed!');

});
