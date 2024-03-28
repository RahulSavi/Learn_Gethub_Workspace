const user = {
    username: "rahul",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to LogicMo Systems private Limited`)
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username ="Rahul Yadav"
// user.welcomeMessage()

// console.log(this);
// function learnjava(){
//     let techcompname ="LogicMo Systems Private limited"
//     console.log(this.username);
// }
// learnjava()

// const mouse =function(){
//     let mouse_make ="DELL"
//     console.log(this)
// }
// mouse()

const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(5, 8));