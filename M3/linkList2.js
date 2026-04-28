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

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

linkedList.prepend(10)
linkedList.prepend(20)
linkedList.prepend(30)

linkedList.insert(2,100)

linkedList.print()