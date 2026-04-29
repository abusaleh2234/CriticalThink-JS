class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    append(value){
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length ++
        
        return this
    }
    prepend(value){
        const nawNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            nawNode.next = this.head;
            this.head = nawNode
        }
        this.length++

        return this
    }

    insert(index, value){
        if (index < 0 || index > this.length) {
            console.log("index is out of bound");
            return undefined
        }
        // if insert is first
        if (index === 0) {
         return this.prepend(value)
        }
        // if insert is last
        if (index === this.length) {
            return this.append(value)
        }
        // if insert is middle
        const leadingNode = this._traverseToIndex(index-1)
        const holdingNode = leadingNode.next;
        // console.log(leadingNode,"ft");
        // console.log(holdingNode, "df");
        const newNode = new Node(value)

        leadingNode.next = newNode;
        newNode.next = holdingNode;
        
        this.length ++
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            console.log("index is out of bound");
            return undefined
        }
        if (index === 0) {
            const removedItem = this.head.value
            this.head = this.head.next

            if (this.length === 1) {
                this.tail = null
            }
            this.length--
            return removedItem
        }
        const leadingNode = this._traverseToIndex(index - 1)
        const nodeToRemove = leadingNode.next 
        leadingNode.next = nodeToRemove.next  // face err

        if(leadingNode.next === null){
            this.tail = leadingNode
        }
        return nodeToRemove.value
    }
    _traverseToIndex(index){
        let count = 0
        let currentNode = this.head
        while(count !== index){
            currentNode = currentNode.next
            count++;
        }
        return currentNode
        // console.log(currentNode);
    }
    print(){
        const arr = []
        let currentNode = this.head

        while(currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.join("=>") , this.tail);
        
    }
}

const linkedList = new LinkList() 

linkedList.append("A")
linkedList.append("B")
// linkedList.append("C")
// linkedList.append("D")

linkedList.remove(0)
linkedList.print()