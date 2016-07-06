'use strict';

var preorderTraversal = function(root) {
    var number = [];
    if(root === null) return number;
    var arr = [];
    while(root){
        number.push(root.val);
        root.right && arr.push(root.right);
        root = root.left;
        root || (root = arr.pop());
    }
    return number;
};

exports.preorderTraversal = preorderTraversal;