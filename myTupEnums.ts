// Normal array does not check the order and length
// const user : (string | number)[] = [1, "John"]

let user : [string, number, boolean] = ["", 1, false]

let rgb : [number, number,number];
// rgb =  [0, 0, 0, 0.6] // not allowed because 3rd index is not defined in the type definition
rgb =  [0, 0, 0]

type User = [number, string]
const myUser: User = [25, 'John']







export {}