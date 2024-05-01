"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello Alok";
// implicitly type of myNum is assign to a number
var myNum = 6;
console.log(greeting);
// type of parameter should be given otherwise it will take any type by default
// here return type is a number if function return a string it will thorw an error
function addTwo(num) {
    if (num === void 0) { num = 10; }
    return num + 2;
}
var res = addTwo();
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("abc");
function signUpUser(name, email, isPaid) {
    return {
        name: name,
        email: email,
        paidUser: isPaid
    };
}
signUpUser("Alok", "alok@gmail.com", true);
// handeling default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("Alok", "alok@gmail.com");


console.log(res);
