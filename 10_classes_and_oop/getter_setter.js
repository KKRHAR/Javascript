class User {
    constructor(email,password){
        this.email= email;
        this.password= password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email= value

    }
    get password(){
           return this._password.toUpperCase()
    }
    set password(value){
        this._password= value
    }
}

const ragen= new User("Ragen@gmail.com",'abc')
console.log(ragen.password)
console.log(ragen.email)