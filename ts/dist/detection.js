"use strict";
/* Type Norrowing */
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 3;
}
// Empty string is a falsy value so here logic will fail
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase();
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
// Using instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toLocaleUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return " fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// Discriminated Union
