const dataCache = new Map()

const expansiveTask = (id) => {
    console.log("Run the task for id:" , id);
    return {
        id: id,
        data: `Some data from this id ${id}`,
        timeStamp : new Date().getTime()
    }
}
// console.log(expansiveTask(12));

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("cache hit for id: " , id);
       return dataCache.get(id) 
    }

    console.log("Cache miss for id: ", id);
    const data = expansiveTask(id)
    dataCache.set(id,data)
    return data
}
console.log(getData(12));
console.log(getData(12));

// console.log(dataCache);
