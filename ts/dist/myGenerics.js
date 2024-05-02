"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(4)
function identityFour(val) {
    return val;
}
identityFour({
    brand: "Jack Daniels",
    type: 100
});
function getSearchProducts(products) {
    return products[0];
}
const getMoredSearchProduct = (products) => {
    return products[0];
};
function anotherFunction(valOne, valTow) {
    return {
        valOne,
        valTow
    };
}
/* Same as above but different approach */
// function anotherFunction<T, Database>(valOne: T, valTow: Database): object {
//   return {
// valOne,
// valTow,
//   };
// }
anotherFunction(3, {
    connection: "localhost",
    username: "root",
    password: ""
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
const quiz = new Sellable();
const course = new Sellable();
console.log(quiz);
console.log(course);
quiz.addToCart({
    name: "Math",
    type: "Science",
});
course.addToCart({
    name: "Math",
    subject: "Science",
    author: "Alok",
});
console.log(quiz.cart);
console.log(course.cart);
