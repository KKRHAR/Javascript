const tinderUser = new Object() // This is a singleton Object

// const tinderUser = {} // This is not a singleton Object

tinderUser.id = '123abc'
tinderUser.name = "Santosh"
tinderUser.isLoggedIn = false

const regularUser = {
    email:"some@gmail.com",
    FullName:{
        userfullname:{
            firstname:"Ragen",
            lastname:"Nepal",
        }
    }
}
// console.log(regularUser.FullName.userfullname.firstname)

// console.log(tinderUser)


const obj1 = {1:'a',2:"b"}
const obj2 = {3:'a',4:'b'}
const obj4 = {5:'a',6:'b'}


//Now we are going to merge the Array.

// const obj3 = {obj1,obj2}
// console.log(obj3)// same problem as in array it merges the two object.


// const obj3 = Object.assign({} // this create a empty array and value goes there it is not compulsory but it is a good practice.
//     ,obj1,obj2,obj4)// This is the way to merge the object.
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// this method is mostly used to merge the object and it is quiet easy to use
// console.log(obj3)

const users = [
    {
        id:1,
        email:"R@gmail.com",
    },
    {
        id:1,
        email:"R@gmail.com",
    },
    {
        id:1,
        email:"R@gmail.com",
    },

]
// console.log(users[1].email) // accesing the value in array of object.

// console.log(Object.keys(tinderUser));// it gives me the value of key in array so i can loop through it and use it many ways.
// console.log (Object.values(tinderUser))// it gives me the value.

// console.log(Object.entries(tinderUser));
// It gives key and values in seperated arrays every key value is in array
// => [ [ 'id', '123abc' ], [ 'name', 'Santosh' ], [ 'isLoggedIn', false ] ]


// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// it check whether i have this key or not.

const course = {
    coursename:"js",
    price:"999",
    courseInstructor:"Ragen"
}

//course.courseInstructor

// const{courseInstructor:instructor}= course
// // we are destructuring object here 
// console.log(instructor);



// const navbar = ({company}) =>{

// }  // this wil be used in react
// navbar(company="AbC")

// {
//     name :"ab"
//     "age":"23" this is json format
                 // same like object but keys are ""quataion

// }
// json can also be in array form
