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