/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = (root) => {
  return isValidNode(root, -Infinity, +Infinity);
};

function isValidNode(node, min, max) {
  if (!node) return true;

  if (node.val >= max || node.val <= min) return false;

  return (
    isValidNode(node.left, min, node.val) &&
    isValidNode(node.right, node.val, max)
  );
}
