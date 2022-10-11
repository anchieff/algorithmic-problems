/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (head == null) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast && fast != null) {
    slow = slow.next;
    fast = fast.next?.next;
  }

  return slow === fast;
};
