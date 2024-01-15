// Primitive (Call by Vlaue)

//7 type : string , Number,boolean,null,undefined, symbol,bigInt

// Reference type datatypes (Non Primitive)

// Arrays, objects,functions


const id= Symbol('123456')
const userid= Symbol('123456')

console.log(id=== userid);

const bigNumber = 1321321564897954545656n

const cars=["Omini","swift","Auto"]
let myobj={
    name:"Rahul",
    age :32,
    location:"pune"
}

const myfunction=function(){
console.log("Hello Rahul")
}
console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++

//Stack (primitive),Heap (Non-Primitive)

let mycompanname="LogicMo Systems private Limited";
anothername="LMSPL"
console.log(mycompanname);
console.log(anothername);

let user={
    email:"rahuly@logicmo.com",
    empcode: 1020

}
//console.log(user)

let userone=user
userone.email="techsupport@logicmo.com"
console.log(user.email)
console.log(userone.email)

