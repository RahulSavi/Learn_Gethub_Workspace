const user_details={
    name: "Rhaul",
    "full name" : "Rahul Yadav",
     age: 32,
     location: "Pune",
     isloggedin : false,
     lastloginday :["Monday","Saturday"]
}

//console.log(user_details["full name"]);

//console.log(user_details.name);

user_details.hello = function(){
    console.log("Hello user");
}

user_details.hello2 = function(){
    console.log(`Hello user,${this.name}`);
}

console.log(user_details.hello);
console.log(user_details.hello2);