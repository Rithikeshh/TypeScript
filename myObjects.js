"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Alok",
    email: "alok@gmail.com",
    age: 24,
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Alok", isPaid: false, email: "alok@gmail.com" };
createUser({ name: "Alok", isPaid: false });
// createUser({name: "Alok", isPaid: false, email: "alok@gmail.com"}); //showing error message
createUser(newUser); //not showing any error message wierd?
function createCourse() {
    return { name: "TypeScript", price: 399 };
}
var course1 = createCourse();
function createUser2(user) {
    console.log(User);
}
createUser2(User);
