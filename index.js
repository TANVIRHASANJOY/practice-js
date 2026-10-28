// array destructuring

const numbers=[30,50,67]
const [one,,two] =numbers;
console.log(one)
// objects destructuring 
const userInfo ={
    name:"joy",
    age : 25,
    country : "BANGLADESH"
}
const {age, country}=userInfo;
console.log(age)
// spread operator 
const ages=[45,6,7,5,36]
const copy=[...ages,numbers]
console.log(copy)
// spread operator in objects
const people={
    name:"sakib",
    age:23,
}
const updatePeople={
    ...people,
    age :26

}
console.log(updatePeople)
// object declared 
const phones={
    oppo :{
        brand:"oppo",
        price : 12000,

    },
    iphone:{
        brand : "apple",
        price : 12000,
    },
    samsung :{
brand : "samsung",
price : 30000,
    }
}
console.log(phones.oppo.price)