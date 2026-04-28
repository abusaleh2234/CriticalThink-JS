class Stack {
    constructor() {
        this.item = []
    }
    push(value) {
        this.item.push(value)
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0
    }
    print() {
        console.log(this.item.slice().reverse().join("=>"));

    }
}

const stake = new Stack()

// console.log(stake.pop());
// console.log(stake.isEmpty());
// stake.push(12)
// stake.push(20)
stake.push(10)
stake.push(10)
stake.print()
console.log(stake.pop());
stake.print()
