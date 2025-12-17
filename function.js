// function

function myfunction(){
const a=25
b=65
if(a!=b){
    console.log('ram');
}else{
    console.log('hari');
}
}
myfunction()

// 2

function getresult(marks){
    if(marks>54){
        console.log('pass');
    }else{
        console.log('fail');

    }
}
var markscheck=getresult(65);
console.log(markscheck);


// 3
function marks(){
    let ab=25
    bc=35
    if(ab==bc){
        console.log('rahu');

    }else{
        console.log('ketu');
    }
}
marks()












// os module

const os=require('os')
console.log(os.version());

const vs=require('os')
console.log(os.EOL);

let rs=require('os')
console.log(os.availableParallelism());

let as=require('os')
console.log(os.cpus());

let ab=require('os')
console.log(os.arch());

let bb=require('os')
console.log(os.constants);

let cb=require('os')
console.log(os.devNull);

let db=require('os')
console.log(os.endianness());

let eb=require('os')
console.log(os.freemem());

let fb=require('os')
console.log(os.getPriority());

let ib=require('os')
console.log(os.uptime());

let jb=require('os')
console.log(os.homedir());

let kb=require('os')
console.log(os.hostname());

let lb=require('os')
console.log(os.loadavg());

let mb=require('os')
console.log(os.networkInterfaces());

let nb=require('os')
console.log(os.platform());

let ajb=require('os')
console.log(os.release());

let ob=require('os')
console.log(os.setPriority);

let xb=require('os')
console.log(os.tmpdir());

let zb=require('os')
console.log(os.totalmem());

let jjb=require('os')
console.log(os.type());

let jlb=require('os')
console.log(os.version());

let hfjb=require('os')
console.log(os.userInfo());

let fg=require('os')
console.log(os.constants.signals);

let vr=require('os')
console.log(os.constants.dlopen);

let hri=require('os')
console.log(os.constants.priority);

let piu=require('os')
console.log(os.constants.libuv);

let jkb=require('os')
console.log(os.constants.error);


// fs module

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
// var fs=require('fs');
// fs.close('mynewfile1.txt',function(err){
//     if(err) throw err;
//     console.log('closed!');

// });


// fs module
// append file
var fs=require("fs");
fs.appendFile('mynewfile1.txt','hellow content',function(err){
    if(err)throw err;
    console.log('saved');
    
});

// write file
var fs=require('fs');
fs.writeFile('mynewfile3.txt','this is my text',function(err){
    if(err)throw err;
    console.log('replaced');
    
});

// path
const formatted = path.format({
    dir: '/users/john/docs',
    name: 'vikash',
    ext: '.txt'
  });
  console.log(formatted)

    
// http module
  var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
