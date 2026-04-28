class Queue {
    constructor(){
        this.item = []
    }
    enQueue(value){
        this.item.push(value)
    }
    deQueue(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.item.shift()
    }
    peek(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[0]
    }
    isEmpty(){
       return this.item.length === 0
    }
    print(){
        console.log(this.item);
        
    }
}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enQueue(10)
queue.enQueue(50)
queue.enQueue(70)
queue.print()
console.log(queue.isEmpty());
console.log(queue.deQueue());
console.log(queue.peek());

queue.print()

