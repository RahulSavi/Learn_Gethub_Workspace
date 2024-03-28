const user={
    username:"rahul",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to LogicMo Systems private Limited`)
        console.log(this);
    }

}
user.welcomeMessage()
user.username ="Rahul Yadav"
user.welcomeMessage()

console.log(this);