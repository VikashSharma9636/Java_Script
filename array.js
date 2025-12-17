// concate array
const a1=['radha','krishan']
const a2=['ram','sita']
const a3=['hari','prasad']
const childrens=a1.concat(a2,a3);
console.log(childrens);
childrens.forEach((childrenss) =>{
    console.log(childrenss)
}) 


// 2
let c1=['kapur']
c2=['badshah']
c3=['rani']
c4=['king']
const ramnarayan=c1.concat(c2,c3,c4);
console.log(ramnarayan);
ramnarayan.forEach((ramnarayan) =>{
    console.log(ramnarayan)
}) 


// multi array

let studentname=[["jayshree",24],["paru",25],];
studentname.push(["peter",30]);
console.log(studentname);
studentname.forEach((student)=>{
    student.forEach((name)=>{
        console.log(name);
    })
})



// 2
let studentedata=[["bad",65],["badu",75],];
studentedata.push(["bidi",50]);
console.log(studentedata);
studentedata.forEach((studente)=>{
    studente.forEach((data)=>{
        console.log(data);
    })
})

// slice

const animals=['ant','camal','duck','cat'];
console.log(animals.slice(0,2));
animals.forEach((animal)=>{
    console.log(animal);
    
})


// 2
const index=['fgdf',52,26,58,];
console.log(index.slice(0,2));
index.forEach((anl)=>{
    console.log(anl);
    
})


// 3
const ani=['sd','df','fg','jhy'];
console.log(ani.slice(0,2));
ani.forEach((aa)=>{
    console.log(aa);
    
})
