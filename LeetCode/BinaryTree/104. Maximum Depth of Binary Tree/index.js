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
 var maxDepth = function(root) {
    let depth = 0

    countNodes(root)

    function countNodes(node, cnt = 0) {
      if (!node) {
        depth = Math.max(depth, cnt)
        return
      }

      cnt +=1

      countNodes(node.left, cnt)
      countNodes(node.right, cnt)
    }

    return depth
 };

 