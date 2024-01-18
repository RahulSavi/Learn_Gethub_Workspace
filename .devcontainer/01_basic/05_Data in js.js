//dates
// let mydate =new Date()
// console.log(mydate.toString)
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleDateString())
// console.log(typeof mydate)

//let mycreateddate = new Date(2024,0,18)
let mycreateddate = new Date(2024,0,18,5,3)
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toString())
//console.log(mycreateddate.toLocaleDateString())

// console.log(mycreateddate.getTime());

 let myTimeStamp = Date.now()
// console.log(myTimeStamp)

let newdate =new Date()
// console.log(newdate.getDay());
// console.log(newdate.getMonth())

// console.log`${newdate.getDate()}`

newdate.toLocaleDateString('default',{
    weekday : "long",
    
})



