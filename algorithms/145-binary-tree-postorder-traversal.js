'use strict';

var postorderTraversal = function(root) {
    var number = [];
    if(root === null) return number;
    var arr = [root];
    while(arr.length > 0){
        root = arr.pop();
        number.unshift(root.val);
        if(root.left) arr.push(root.left);
        if(root.right) arr.push(root.right);
    }
    return number;
};
exports.postorderTraversal = postorderTraversal;

//The reversed result of postorder traversal is exactly the result of preorder traversal with the all the tree's left and right subtrees exchanged.
var postorderTraversal2 = function(root) {
    var number = [];
    if(root === null) return number;
    var arr = [];
    while(root){
        number.unshift(root.val);
        root.left && arr.push(root.left);
        root = root.right;
        root || (root = arr.pop());
    }
    return number;
};
exports.postorderTraversal2 = postorderTraversal2;