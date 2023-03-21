class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0
  }
  insertNodeAtIndex(head,index,value) {
    if(index === 0) {
      const node = new Node(value)
      node.next = head
      this.head = node
      
      this.length ++
      return node
    }
   
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function insertNodeAtIndex(head, index, value) {
  if (index < 0) {
    throw new Error('Index cannot be negative');
  }

  if (index === 0) {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
  }

  if (!head) {
    throw new Error('Index out of bounds');
  }

  head.next = insertNodeAtIndex(head.next, index - 1, value);

  return head;
}
const LL = new LinkedList()
const node = LL.insertNodeAtIndex(LL.head,0,12)
//const node = insertNodeAtIndex(LL.head,0,12)
// const node2 = insertNodeAtIndex(LL.head,1,90)
console.log(node)
console.log(LL)
//console.log(node2)
