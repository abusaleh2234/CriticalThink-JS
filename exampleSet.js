const fruits = ["apple", "mango", "banana", "tomato","apple", "banana"]

const removeDupArr = (arr) => {
    const newArr = []
    fruits.forEach(fruit => {
        if (!newArr.includes(fruit)) {
            newArr.push(fruit)
        }
    })
    return newArr;
}
console.log(removeDupArr(fruits));


const removeDupSet = (arr) => {
    const fruits = new Set(arr)
    return Array.from(fruits)
}

console.log(removeDupSet(fruits));
