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

const bracketChecker = (str) => {
    const stack = new Stack()
    const bracketMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === "(" || char === "{"|| char === "[") {
            stack.push(char)
        }else if(char === ")" || char === "}"|| char === "]"){
            if(stack.isEmpty() || stack.pop() !== bracketMap[char]){
                return false;
            }
        }
        
    }
    // console.log(stack);
    return stack.isEmpty()
}
console.log(bracketChecker(")({[]})"));
