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
    
    let temp = this.head
    
    for(let i = 1 ; i<index ; i ++) {
      temp = temp.next
    }
    const ref = temp.next
    temp.next = node
    node.next = ref
    this.length ++ 
  }

  
  deleteFirst() {
    let deletedNode = null
    if(this.head) {
      deletedNode = this.head
       this.head = this.head.next
    }
    
    if(this.length === 1){
      // if there is only one node
      deletedNode = this.head
      this.head = null,
      this.tail = null
    }
   this.length --
    return deletedNode.value
  }

  deleteLast() {
    // if linked list is empty
    
     if (!this.head) {
      return null;
    }
    // if there is only one node
    
    if (!this.head.next) {
     this.deleteFirst()
      return
    } 
    
    let currentNode = this.head
     while (currentNode.next.next) {
        currentNode = currentNode.next
      }
    let deletedNode = currentNode.next
      currentNode.next = null
      this.tail = currentNode
      this.length --
    return deletedNode.value
  }
  
  deleteNodeByIndex(index) {
    
  if (index < 0 || index >= this.length || !this.head) {
    return null
  }

  if (index === 0) {
    this.deleteFirst()
    return
  }

  let currentNode = this.head
  let currentIndex = 0

  while (currentIndex < index - 1) {
    currentNode = currentNode.next
    currentIndex++
  }

  const deletedNode = currentNode.next
  currentNode.next = currentNode.next.next
  this.length--
    
 // if deleted node was the last node of the list
  if (!this.head.next) {
    this.tail = this.head;
  }

  return deletedNode.value;
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
const firstNode = LL.deleteFirst()
console.log('First Node was -- ' + firstNode)
const lastNode = LL.deleteLast()
console.log('Last Node was -- ' + lastNode)
const deletedNode = LL.deleteNodeByIndex(2)
console.log('Nth deleted Node was -- ' + deletedNode)
LL.display()
console.log(LL)

