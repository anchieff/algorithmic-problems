/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let pointA = headA;
  let pointB = headB;

  while (pointA !== pointB) {
    if (pointA == null) {
      pointA = headB;
    } else {
      pointA = headA.next;
    }

    if (pointB == null) {
      pointB = headA;
    } else {
      pointB = headB.next;
    }
  }

  return pointA;
};
