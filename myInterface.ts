interface User {
    readonly _id: string
    email: string,
    userId: number,
    googleId? : string,
    // startTrail: ()=>string // same as below but different from
    startTrail(): string,
    getCoupon(couponName:string, value: number): string
}

interface User{
    githubToken: string
}

interface Admin extends User{
    role: "admin"
}

const alok : User = {
    _id: "",
    email: 'alok@gmail.com',
    userId: 1234,
    startTrail : ()=>"string",
    getCoupon:(c, val)=> `coupon: ${c} is applied to ${val}`,
    githubToken: "githubToken"
}
const alokAsAdmin : Admin = {
    _id: "",
    email: 'alok@gmail.com',
    userId: 1234,
    startTrail : ()=>"string",
    getCoupon:(c, val)=> `coupon: ${c} is applied to ${val}`,
    githubToken: "githubToken",
    role: "admin"
}

//Diff between type and interface
/*
    in interface we can inheritance
    and add properties to existing interface 
    just by recreating the interface with new properties
*/



export {}