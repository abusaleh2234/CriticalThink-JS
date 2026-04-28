// closer

// const createCounter = () => {
//     let count = 0

//     return (amount) => {
//         count = count + amount
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter(5));
// console.log(counter(8));


// Class ==============

class counter {
    constructor(count){
        this.count = count
    }
    add(amount){
        this.count = this.count + amount
    }
    print(){
        console.log(this.count);
        
    }
}

const counter1 = new counter(5)

counter1.add(12)
counter1.add(60)
counter1.print()

const counter2 = new counter(0)

counter2.add(100)
counter2.add(400)
counter2.print()