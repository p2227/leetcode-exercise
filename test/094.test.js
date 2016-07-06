'use strict';

var TreeBuilder = require('./../tools/binary-tree-builder');

var {inorderTraversal} = require('./../algorithms/094-binary-tree-inorder-traversal');

var {testArr} = require('.');

function treetest(input,expectOutput){
    return testArr(inorderTraversal((new TreeBuilder(input)).root),expectOutput)
}

console.log('094-binary-tree-inorder-traversal');

treetest([],[]);
treetest([1,2,3],[2,1,3]);
treetest([1,null,2,3],[1,3,2]);
treetest([3,2,4,null,null,1],[2,3,1,4]);
treetest([5,4,7,3,null,2,null,-1,null,9],[-1,3,4,5,9,2,7]);
treetest([30,20,40,15,27,35,45],[15,20,27,30,35,40,45]);
treetest([30,20,40,null,27,35,45],[20,27,30,35,40,45]);
treetest([50,30,90,20,40,70,100,15,27,35,45,60,78,92,107],[15,20,27,30,35,40,45,50,60,70,78,90,92,100,107]);