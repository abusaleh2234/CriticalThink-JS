const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];


const lookUpTable = postsArray.reduce((table, post) => {
    // console.log(table);
    table[post.id] = post
    return table
},{})
// console.log(lookUpTable);



// const post  = lookUpTable["p-101"]
// console.log(post);
for (const post in lookUpTable) {
    // console.log(post);
    
    console.log(lookUpTable[post]);
    
}

