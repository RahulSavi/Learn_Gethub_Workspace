//const user_mgmt =new Object()//signlrton object

// non singletone object.
const user_mgmt ={}

console.log(user_mgmt);

user_mgmt.id ="1245abcd"

user_mgmt.name="rahul"

user_mgmt.inLoggedin=false

//console.log(user_mgmt);

const regularuser={
    email : "rahuly@logicmo.com",
    fullname:{
        userfullname:{
            firstname: "logicMo",
            lastname:"Systems"
        }
    }
}
// console.log(regularuser.fullname?.userfullname?.firstname)

const objt1 = {1: "a", 2: "b"}
const objt2 = {3: "c", 4: "d"}

// const objt3 ={objt1,objt2}

//const objt3=Object.assign({},objt1,objt2)
const objt3 ={...objt1,...objt2}
//console.log(objt3)

const user =[{
    id:1,
    email:"rahuly@logicm.com"
},
{
    id:2,
    email:"ramesh@logicm.com"
},
{
    id:3,
    email:"rohit@logicm.com"
},
{
    id:4,
    email:"ritesh@logicm.com"
},
]

user[1].email

// console.log(Object.keys(user_mgmt));
// console.log(Object.values(user_mgmt));
// console.log(Object.entries(user_mgmt));
// console.log(user_mgmt.hasOwnProperty('name'));

const course ={
    coursename : "Javascript",
    price:"99",
    courseinstructor: "Myself"
}

const{courseinstructor:instructor} =course

console.log(instructor)












