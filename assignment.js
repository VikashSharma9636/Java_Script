// fs modules node js

// read file
var fs=require ('fs');
    fs.readFile('my new file.text',function(err,data){
        if(err.data) throw err;
        console.log('readed');
        
    });

//  creat file
var fs=require('fs');
fs.appendFile('my new file0.txt','hello context',function(err){
    if(err)throw err;
    console.log('saved');
    
});


// update file
var fs=require('fs');
fs.writeFile('mynewfile1.txt','this is my file',function(err){
    if(err) throw err;
    console.log('replaced!');
});


// delete file
var fs=require('fs');
fs.unlink('mynewfile0.txt',function(err){
    if(err) throw err;
    console.log('deleted!');
});


// rename file
var fs=require('fs');
fs.rename('mynewfile1.txt','radhe',function(err){
    if(err) throw err;
    console.log('renamed!');
});


// close file
// var fs=require('fs');
// fs.close('mynewfile1.txt', function(err){
//     if(err) throw err;
//     console.log('closed');

// });



// os module node js
var os=require('os');
console.log(os.EOL);

var os=require('os');
console.log(os.availableParallelism());

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

var os=require('os');
console.log(os.tmpdir());

var os=require('os');
console.log(os.totalmem());

var os=require('os');
console.log(os.type());

var os=require('os');
console.log(os.version());

var os=require('os');
console.log(os.userInfo());

var os=require('os');
console.log(os.uptime());

var os=require('os');
console.log(os.getPriority());

var os=require('os');
console.log(os.freemem());

var os=require('os');
console.log(os.endianness());

var os=require('os');
console.log(os.devNull);
var os=require('os');
console.log(os.cpus());

var os=require('os');
console.log(os.constants);

var os=require('os');
console.log(os.arch());



// path module node js

var path=require('path');
console.log(path);


// http module node js

var http=require('http');
console.log(http);

