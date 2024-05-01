let score : number | string = 33
score = '88'

type User = {
    name: string,
    id: number
}
type Admin = {
    userName: string,
    id: number
}

let alok : User | Admin = {
    name: "Alok",
    id: 12345
}

alok = {
    userName: "admin",
    id: 9012
}

function getDbId(id: number | string){
    // id.toLowerCase() // show error because id could be a number too
    //handle above issue
    if(typeof id === 'string'){
        id.toLowerCase()
    }
    console.log(`DB id is ${id}`);
}
getDbId(3)
getDbId("4")

// Array

// const data : number[] = [1, 2, 3, 4, "5"] // not allowed
// const data : string[] = [1, 2, 3, 4, "5"] // not allowed
const data : (number | string)[] = [1, 2, 3, 4, "5"]
// same as above with different syntax
// const data : Array<number | string> = [1, 2, 3, 4, "5"]

// To fix value
let pi:3.14 = 3.14
// pi = 3.145 // show error

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" //  show error because value of seatAllotmen should be "aisle" or "middle" or "window" as it is defined