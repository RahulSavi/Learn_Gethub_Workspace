const emptyobject ={}
if (Object.keys(emptyobject).length===0){
    console.log("Object is empty");
}

//Nullish coleasing Operator (??): null undfined

let val1;
val1=5??10

console.log(val1);

// trunery operator

const iceprice = 100
iceprice>=80 ? console.log("Less than 80") : console.log("More than 80");