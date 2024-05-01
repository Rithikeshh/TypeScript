const superHeros: string[] = []
const heroPower: Array<number> = []

superHeros.push("batman")
heroPower.push(2)

type User = {
    name: string
    isActive: boolean
}
const allUser : User[] = []

allUser.push({
    name:"John", 
    isActive: true
})

const MLModels : number [][] = [
    [12, 2, 4]
]
// same as above but with different syntax
// const MLModels : Array<Array<number>> = [
//     [12, 2, 4]
// ]
export {}