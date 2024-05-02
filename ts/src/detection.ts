/* Type Norrowing */

function detectType(val: number | string): number | string {
  if (typeof val === "string") return val.toLowerCase();
  return val + 3;
}

// Empty string is a falsy value so here logic will fail
function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return;
  }
  id.toLowerCase();
}

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin): boolean {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return false;
}

// Using instanceof
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toLocaleUpperCase());
  }
}

// Using type predicates
type Fish = { swim(): void };
type Bird = { fly(): void };
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return " fish food";
  } else {
    pet;
    return "bird food";
  }
}

// Discriminated Union
