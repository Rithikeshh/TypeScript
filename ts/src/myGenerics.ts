const scores:Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val:any): any{
    return val;
}
function identityThree<Type>(val: Type): Type{
    return val;
}
// identityThree(4)
function identityFour<T>(val: T): T{
    return val;
}
interface Bottel{
    brand: string;
    type: number
}
identityFour<Bottel>({
    brand: "Jack Daniels", 
    type: 100
})

function getSearchProducts<T>(products: Array<T>): T{

    return products[0];
}

const getMoredSearchProduct = <T>(products: T[]):T=>{
    return products[0]
}


interface Database{
    connection: string;
    username: string;
    password: string;
}


function anotherFunction<T, U extends Database>(valOne:T, valTow:U):object{
    return {
        valOne,
        valTow
    }
}
/* Same as above but different approach */
// function anotherFunction<T, Database>(valOne: T, valTow: Database): object {
//   return {
    // valOne,
    // valTow,
//   };
// }
anotherFunction(3, {
    connection:"localhost",
    username: "root",
    password: ""
})

/* Generic class */
interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: String;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T): void {
    this.cart.push(product);
  }
}

const quiz = new Sellable<Quiz>();
const course = new Sellable<Course>();
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

