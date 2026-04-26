
const firstArray = []
const secondArray = []

for (let i = 0; i < 600000 ; i++) {
    
    if (i < 300000) {
        firstArray.push(i)
    }
    secondArray.push(i)
}

console.log("firstArray", firstArray.length)
console.log("secondArray", secondArray.length)

console.time("map1")
const map1 = firstArray.map(n => ({userId: n}))
console.timeEnd("map1")

console.time("map2")
const map2 = secondArray.map(n => ({userId: n}))
console.timeEnd("map2")


console.time("find")
// const find = map2.find(user  => user.userId === 400000)

const userEach = secondArray[600000]
console.timeEnd("find")

