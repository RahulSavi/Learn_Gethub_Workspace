function print(){
    console.log("Rhaul")
    console.log("Ramesh")
}

print()

function addnumber(num1,num2){

    //console.log(num1+num2)

    // let result =num1+ num2
    // return result

    return  num1+num2

}
const result=addnumber(3,4)

console.log("Result:", result)

//... rest oprator
function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(200,400,250))

const user ={
    username:"Logicmo",
    price:200
}

function handleObject(anyoneobject){
    console.log(`user nam is ${anyoneobject.username} and price is ${anyoneobject.price}`)
}
handleObject(user)

handleObject({
    username:"Rahul",
    price:299
})