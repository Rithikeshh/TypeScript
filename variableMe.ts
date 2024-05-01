let greeting: string = "Hello Alok"

// implicitly type of myNum is assign to a number
let myNum = 6
console.log(greeting);

// type of parameter should be given otherwise it will take any type by default
// here return type is a number if function return a string it will thorw an error
function addTwo(num:number = 10):number{
    return  num+2
}
const res = addTwo();

function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("abc")
function signUpUser(name: string, email: string, isPaid: boolean){
    return {
        name : name,
        email :email,
        paidUser :isPaid
    }
}
signUpUser("Alok","alok@gmail.com",true)

// handeling default values
let loginUser = (name: string, email: string, isPaid:boolean = true)=>{

}
loginUser("Alok","alok@gmail.com")

function getValue(myVal: number):boolean{
    
    if(myVal < 5) return true;
    // return "status 200 " not allowed as return type is only boolean
    return false;
}
getValue(4);

const getHello = (s: string):string =>{
    return `hello ${s}`
}

const heros = ["thor", "spiderman", "ironman", "batman"]

heros.map((hero):string=>{
    return `Hero is ${hero}`
})

function consoleError(errMsg:string):void{
    
    console.log(errMsg);
    
}
function handleError(errMsg:string):never{
    throw new Error(errMsg)
    
}
console.log(res)

export {}
