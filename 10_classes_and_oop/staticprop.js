class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

   static createId(){
        return `123`
    }
}

const ragen = new User("Ragen")
// console.log(ragen.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
this.email=email

    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.logMe())
// console.log(iphone.createId());


// when we write static we are not able to access
// it's value.just like in createId()