// stateless & stateful

// const counter = (amount) => {
//     let count = 0
//     count = count + amount
//     return count
// }

// console.log(counter(4));
// console.log(counter(6));

const counter = {
    count :0,

    add(amount){
        this.count = this.count + amount
    },
    print(){
        console.log(this.count);
        
    }
}

counter.add(5)
counter.add(19)
counter.print()