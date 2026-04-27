const number = [32, 1, 34, 10, 5, 43, 6, 56]
const fruit = ["apple",
    "Banana",
    "Orange",
    "mango",
    "Grapes",
    "pineapple"]

// const sortNumber = number.sort((a, b) => a-b)
// const sortNumber = number.sort((a, b) => b-a)
// console.log(sortNumber);

// fruit.sort() 
// output:  [ 'Banana', 'Grapes', 'Orange', 'apple', 'mango', 'pineapple' ]

// fruit.sort((a,b) => a.localeCompare(b))
// output : [ 'apple', 'Banana', 'Grapes', 'mango', 'Orange', 'pineapple' ]
// console.log(fruit);

// nested array 

const arr = [1, 2, 3, [4, 5,[6,7,[8,9,[10,11]]]]];
    // arr.flat(2/3/4/ Infinity)
const flatArray = arr.flat(Infinity)
// console.log(flatArray);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filterTag = [...new Set(tagsFromPosts.flat())]

console.log(filterTag);
