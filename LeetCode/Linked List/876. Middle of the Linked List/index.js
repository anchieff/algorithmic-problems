/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
  if (!head.next) return head
  let mid = Math.floor(countNodes(head) / 2)
  let curr = head

  while (mid > 0) {
    curr = curr.next
    mid -= 1
  }

  return curr
};

function countNodes(root) {
let node = root
let cnt = 1
while(node.next) {
  cnt += 1
  node = node.next
}
return cnt
}
