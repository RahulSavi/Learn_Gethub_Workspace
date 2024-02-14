// let a =20
// const b =20
// var c=30

//{} scope
//console.log(a)
//console.log(b)
//BLOCK SCOPE
if( true){
    let a =20
const b =20
var c=30
}

console.log(c)

function one(){
    const username= "Rahul"
    function two(){
       const website ="Youtube"
        console.log(username)
        
    }

    //console.log(website)
    two()
}
one()

if (true) {
    const username ="Logicmo"
    if (username=== "Logicmo") {
        const website =" systems private Limited."
        console.log(username + website)
        
    }
    //console.log(website)
} else {
    
}