class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteDuplicates(head) {
  debugger
  if (head === null || head.next === null) {
    return head;
  }

  head.next = deleteDuplicates(head.next);

  if (head.value === head.next.value) {
    head.next = head.next.next;
  }

  return head;
}

// Create the linked list 1 -> 2 -> 2 -> 3 -> 3 -> 4 -> null

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);
head.next.next.next.next.next = new Node(4);

// Call the deleteDuplicates function

head = deleteDuplicates(head);

// Print the modified linked list

while (head) {
  console.log(head.value + ' -> ');
  head = head.next;
}


