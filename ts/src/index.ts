class User{
    name: string; 
    email: string;
    readonly city: string = "Kolkata";
    private accountNumber: number = 1234;
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
        
    }
    getX=(function (){
        const a = function(this: User,  x:number){
            console.log(this.accountNumber);
            console.log(x);
        }
        a.x = 10;
        return a
    }())
    getY(){
        console.log(this);
        
    }
    
}
const alok = new User("Alok", "alok@gmail.com");
alok.getX.x

// Another way 

class User1{
    readonly city = "Kolkata";
    // private _courseCount = 1; //private property cant be inherited
    protected _courseCount = 1; //protected property can be inherited
    constructor(
        public name: string, 
        public email: string,
        private accountNumber: number = 1234
    ){
        
    }
    private deleteToken(){
        console.log("Token Deleted");
    }
    getX=(function (){
        const a = function(this: User1,  x:number){
            console.log(this.accountNumber);
            console.log(x);
        }
        a.x = 10;
        return a
    }())
    get getCourseCount():number{
        return this._courseCount
    }
    set setCourseCount(x:number){
        this._courseCount = x
    }
}
class SubUser1 extends User1{
    isFamily:boolean=true;
    changeCourseCount(){
        this._courseCount = 4
    }
    constructor(name:string, email:string){
        super(name, email);
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
