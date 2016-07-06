/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var number = [];
    if (root === null) return number;
    var arr = [];
    while (root || arr.length > 0) {
        if (root) {
            arr.push(root);
            root = root.left;
        } else {
            root = arr.pop();
            number.push(root.val);
            root = root.right;
        }
    }
    return number;
};

exports.inorderTraversal = inorderTraversal;