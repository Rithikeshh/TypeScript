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
anotherFunction(3, {
    connection: "localhost",
    username: "root",
    password: ""
});
