const generateSimData = (size) => {
    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Grapes",
        "Pineapple",
        "Watermelon",
        "Strawberry",
        "Papaya",
        "Guava"
    ];
    const generatedData = []
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * fruits.length) 
        generatedData.push(fruits[randomIndex])
    }
    return generatedData
}

const data = generateSimData(10000000)
console.log("Data Size:", data.length);
const arrStart = performance.now()
const removeDupArr = (array) => {
    const newArray = []
    array.forEach(item => {
        if (!newArray.includes(item)) {
            newArray.push(item)
        }
    });
    return newArray
}
const arrEnd = performance.now()
// console.log(removeDupArr(data));
console.log("Took Time Array", arrEnd-arrStart ,"ms");
const setStart = performance.now()
const removeDupSet = (arr) => {
    const Each = new Set(arr)
    return Array.from(Each)
}
const setEnd = performance.now()

console.log("Took Time Set", setEnd-setStart ,"ms");
