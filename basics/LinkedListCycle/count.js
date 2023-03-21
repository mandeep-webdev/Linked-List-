// count the length of the cycle in the LL
// use the same "slow and fast pointer" technique

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function countCycleLength(head) {
  let slow = head;
  let fast = head;
  let steps = 0;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      
      let current = slow;
      
      do {
        current = current.next;
        steps++;
      } while (current !== slow);
      
      return steps;
    }
  }

  return 0; // no cycle found
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(countCycleLength(node1)); 
