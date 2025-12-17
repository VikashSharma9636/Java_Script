// else if
function checkNumber(num){
    if (typeof num !=='number'){
        console.log("please ernter a valid number");
        return;
        
    }
    if(num>0){
        console.log(num+"is positive");
        
    }else if(num<0){
        console.log(num+"is negative");
        
    }else{
        console.log(num+"is zero");
        
    }
}
checkNumber(-20);



// for loop
var i=10;
for(let i=1;i<=10;i++)
{
  console.log(i);
  
}

// array
var arr=[10,20,30,40,50];
console.log(arr);


// arr
var arr = [2, 4, 6, 8, 10];

for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== null) {
        console.log(arr[i] * arr[i]);
    } else {
        console.log(i);
    }
}




// datatypes
// numbers
var bn=23
b=25
console.log(bn);

var c=25
d=36
console.log(c);

// string
var ag="radhe"
f="krishan"
console.log(ag);

const g=65
h=32
console.log(g+h);

// big integer
var i=124516547n
j=3n
console.log(i+j);

const kd=5245988558589458784578548n
jd=35
console.log(kd);


// boolean
var cross=true
land=false
console.log(cross);

const dell=true
high=false
console.log(high);

// undefine
let gjg
rtx=365
console.log(gjg);

var fdfs
dfgs=245
console.log(fdfs);



// equal ==
var agj=65
cpp=65
if(agj==cpp){
    console.log(true);
}else{ 
    console.log(false);
    
     
}


// === exect true
var aff=105
ahj=350
if(aff===ahj){
    console.log(true);
    
}else{
    console.log(false);
    
}
// voting
var amen=19
men=16
if(amen>=18){
    console.log('eligible for voting');
}else if(men<18){
    console.log('not eligible for voting');
}else{
    console.log("not a men");
    
}


// if else
var marks=85;
if(marks>=90){
    console.log("A");
    
}else if(marks>=80){
    console.log("B");
    
}else if(marks>=70){
    console.log("C");
    
}else if(marks>=60){
    console.log("D");
    
}else{
    console.log("fail");
    
}



// numbers
var kj=1;
if(kj==1){
    console.log("one");
    
}else if(kj==2){
    console.log("two");
    
}else if(kj==3){
    console.log("tree");
    
}else{
    console.log("error");
    
}



// even odd
for (let number = 1; number <= 100; number++) {
    if (number % 2 === 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is odd');
    }
}