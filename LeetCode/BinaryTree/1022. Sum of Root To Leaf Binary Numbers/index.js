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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let result = 0;

  function traverse(node = root, sum = 0) {
    if (!node) return;
    sum *= 2;
    sum += node.val;

    if (!node.left && !node.right) result += sum;

    traverse(node.left, sum);
    traverse(node.right, sum);
  }

  traverse();
  return result;
};
