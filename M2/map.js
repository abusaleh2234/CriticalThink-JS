const courses1 = {name: "programming hero"}
const courses2 = {name: "NextLevel"}
const program = [
    [courses1, "level1"],
    [courses2, "level2"]
]
const map = new Map(program)
map.set(courses1 , {userId: "alk32"})
map.set(courses2 , {userId: "ha34"})

map.has(courses1)
// map.delete(courses1)
// console.log(map.has(courses1));

// map.forEach((value, key) => console.log(key,value)) 
console.log(map);

const keys = map.keys()
const value = map.values()

// console.log(keys);

for (const key of keys) {
    // console.log("All in One" + key.name);
}


// console.log(map.entries());

// const obj = {
//     nextLevel : {courseId : "Level2"},
//     "programming hero": {courseId: "Level1"}
// }
// console.log(obj["programming hero"]);

// const obj = {}

// obj[courses1] = {courseId: "level1"}
// obj[courses2] = {courseId: "level2"}

// console.log(ob);
