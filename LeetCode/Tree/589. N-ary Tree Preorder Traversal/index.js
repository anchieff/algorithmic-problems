/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let nodes = [];
  nodeVal(root, nodes);
  return nodes;
};

function nodeVal(head, arr) {
  if (!head) return;
  arr.push(head.val);
  if (!head.children) return;
  head.children.forEach((child) => nodeVal(child, arr));
}
