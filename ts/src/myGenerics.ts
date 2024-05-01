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
anotherFunction(3, {
    connection:"localhost",
    username: "root",
    password: ""
})