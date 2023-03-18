class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0
  }
  prepend(node) {
   
    if(this.head === null && this.tail === null) {
      this.head = node
      this.tail = node
      
    }
    else {
      node.next = this.head
      this.head = node
    }
    this.length ++ 
  }
  append(node) {

    if(this.tail === null){
      this.prepend(node)
    }
    else {
      this.tail.next = node
      this.tail = node
      this.length ++
    }
  }
  display() {
    let temp = new Node()
    temp = this.head
    while(temp!==null) {
      console.log(temp.value + "->")
      temp = temp.next
    }
  }
  insertAtIndex(node,index) {
    if(index === 0) {
      this.prepend(node)
      return
    }
    if(index >= this.length){
      this.append(node)
      return
    }
    
    let temp = new Node()
    temp = this.head
    
    for(let i = 1 ; i<index ; i ++) {
      temp = temp.next
    }
    const ref = temp.next
    temp.next = node
    node.next = ref
    this.length ++ 
  }
}
const LL = new LinkedList()
const node = new Node(9)
const node2 = new Node(89)
const node3 = new Node(34)
const node4 = new Node(23)
const node5 = new Node(10)
const node6 = new Node(14)

LL.prepend(node)
LL.prepend(node2)
LL.append(node3)
LL.insertAtIndex(node4,1)
LL.insertAtIndex(node5,0)
LL.insertAtIndex(node6,5)
LL.display()
console.log(LL)

