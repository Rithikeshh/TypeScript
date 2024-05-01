const User = {
    name : "Alok",
    email : "alok@gmail.com",
    age: 24,
    isActive : true
}

function createUser({name: string, isPaid: boolean}){

}
const newUser = {name: "Alok", isPaid: false, email: "alok@gmail.com"}
createUser({name: "Alok", isPaid: false});
// createUser({name: "Alok", isPaid: false, email: "alok@gmail.com"}); //showing error message
createUser(newUser); //not showing any error message wierd?

function createCourse():{name: string, price: number}{
    return {name: "TypeScript", price: 399}
}
const course1 = createCourse();

type User = {
    name : string,
    email: string,
    isActive: boolean,
}

function createUser2(user: User){
    return {name:"", email: "", isActive: false}
}
createUser2({name:"", email: "", isActive: false})

type cardNumber = {
    cardNumber: string
};
type cardDate = {
    cardDate: string
};
// combines previous or already defined types
type cardDetails = cardDate & cardNumber & {
    cvv : number
};
type UserWithReadonly = {
    readonly _id : string, // this means we can't change the value of id
    name : string,
    email: string,
    isActive: boolean
    credCardDetails: cardDetails, // this means it is an optional key
    getUser(name:string): string
}
let myUser : UserWithReadonly = {
    _id: "1234",
    name :"Alok",
    email: "alok@gmail.com",
    isActive:true,
    credCardDetails : {
        cardNumber : "1234",
        cardDate: "2013",
        cvv: 123
    },
    getUser:(a)=> a

}
// myUser._id ="5678"; //this will show an error because we are trying to reassign a read only property
myUser.name="John Doe";






export {}