"use strict";
class User {
    constructor(name, email) {
        this.city = "Kolkata";
        this.accountNumber = 1234;
        this.getX = (function () {
            const a = function (x) {
                console.log(this.accountNumber);
                console.log(x);
            };
            a.x = 10;
            return a;
        }());
        this.name = name;
        this.email = email;
    }
    getY() {
        console.log(this);
    }
}
const alok = new User("Alok", "alok@gmail.com");
alok.getX.x;
// Another way 
class User1 {
    constructor(name, email, accountNumber = 1234) {
        this.name = name;
        this.email = email;
        this.accountNumber = accountNumber;
        this.city = "Kolkata";
        // private _courseCount = 1; //private property cant be inherited
        this._courseCount = 1; //protected property can be inherited
        this.getX = (function () {
            const a = function (x) {
                console.log(this.accountNumber);
                console.log(x);
            };
            a.x = 10;
            return a;
        }());
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set setCourseCount(x) {
        this._courseCount = x;
    }
}
class SubUser1 extends User1 {
    changeCourseCount() {
        this._courseCount = 4;
    }
    constructor(name, email) {
        super(name, email);
        this.isFamily = true;
    }
}
const alok1 = new User1("Alok", "alok@gmail.com");
const sub = new SubUser1("Alok", "alok@gmail.com");
// alok1.setCourseCount = 12
// interface TakePhoto{
//     cameraMode : string;
//     filter: string;
//     brust: number
// }
// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode: string, 
//         public filter: string,
//         public brust: number
//     ){
//     }
// }
// interface Story{
//     createStory(): string;
// }
// class YouTube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string, 
//         public filter: string,
//         public brust: number,
//         public short: number,
//     ){
//     }
//     public createStory():string {
//         return ""
//     }
// }
// abstract class TakePhoto{
//     constructor(
//         public cameraMode : string,
//         public filter: string
//     ){}
// }
// class Instagram extends TakePhoto{
//     constructor(name: string, cameraMode: string){
//         super(name, cameraMode)
//     }
// }
// const take = new Instagram("test", "vivid");
