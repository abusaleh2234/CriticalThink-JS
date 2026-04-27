
const numbers = [1, 5, 3, 7, 5];

const hasEvenNumber = numbers.some(number => number % 2 ===0)
// console.log(hasEvenNumber);


const currentUserRoles = ["user", "editor","admin"];

const featureAccessRoles = ["admin", "manager"];
const canAccess =  currentUserRoles.some(role => featureAccessRoles.includes(role))

// console.log(canAccess);

// const createArr = Array.from({length:5}).fill("")
// const createArr = Array.from({length:5},((_,i) => i)) //[ 0, 1, 2, 3, 4 ]
const createArr = Array.from([1,2,4,5],((value,i) => value* value))

// console.log(createArr);

const range = (start, stop, step) => 
    Array.from({length: Math.ceil((stop - start)/step) }, (_,i) => start + i * step)
console.log(range(1,11,2));
