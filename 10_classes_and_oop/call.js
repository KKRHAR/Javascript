function SetUsername(username){
    this.username= username
console.log("called")
}


function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email = email
    this.password= password
}

const tea = new createUser("Tea","tea@gmail.com","124")
console.log(tea)