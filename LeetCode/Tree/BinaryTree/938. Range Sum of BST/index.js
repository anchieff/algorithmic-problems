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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let result = 0;

  function checkNode(node) {
    if (!node.val) return;

    if (node.val >= low && node.val <= high) result += node.val;
    checkNode(node.left);
    checkNode(node.right);
  }

  checkNode(root);

  return result;
};

// result = 0
// if !root.val return
// if root.val < high && root.val result = result + root.val
