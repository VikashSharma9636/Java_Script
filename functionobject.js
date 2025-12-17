// function object
const person={
    name:'hari',
    age:25,
    getmarks: function(marks){
        if(marks>65){
            console.log('pass');
        }else{
            console.log('fail');
        }}
}
var marksresult=person.getmarks(75);
console.log(person.name);
console.log(marksresult);

// 2

let company={
    name:'bhanu',
    year:15,
    getpower:function(power){
        if(power>25){
            console.log('rah');

        }else{
            console.log('ram');

        }
    }
}
const powerresult=company.getpower(30);
console.log(company.name);
console.log(powerresult);

// 3
constperson={
    name:'ramu',
    age:32,
    getmarks:function(marks){
        if(marks>25){
            console.log('tuer');

        }else{
            console.log('fas');
        }
    }
}
var marksresult=person.getmarks(25);
console.log(person.name);
console.log(marksresult);