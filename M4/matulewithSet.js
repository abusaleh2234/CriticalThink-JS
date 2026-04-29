const User_count = 50000;

let usersA = [];
let usersB = [];

const createUser = (id) => ({id: `user_${id}`, name: `user ${id}`})

for (let i = 0; i < User_count; i++) {
    usersA.push(createUser(i))
    usersB.push(createUser(i + 25000))
}

// console.log(usersA);
// console.log(usersB);

const mutuleFriendSlow = (usersA, usersB) => {
    const start = performance.now()
    const mutuleFriend = [];

    usersA.forEach(userA => {
        usersB.forEach( userB => {
            userA.id === userB.id && mutuleFriend.push(usersB)
        })
    });
    const end = performance.now()
    return {count: mutuleFriend.length, tookTime : end - start}
}

// console.log(mutuleFriendSlow(usersA,usersB));
const mutuleFriendFast = (usersA, usersB) => {
    const start = performance.now()
    const mutuleFriend = [];

    const idListA = new Set(usersA.map(user => user.id))
    // console.log(idListA);
    usersB.forEach(userB => {
        if (idListA.has(userB.id)) {
            mutuleFriend.push(userB)
        }
    }) 
    const end = performance.now()
    return {count: mutuleFriend.length, tookTime : end - start}
}
console.log(mutuleFriendFast(usersA, usersB));
