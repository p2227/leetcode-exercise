'use strict';

var TreeBuilder = require('./../tools/binary-tree-builder');

var {preorderTraversal} = require('./../algorithms/144-binary-tree-preorder-traversal');

var {testArr} = require('.');

function treetest(input,expectOutput){
    return testArr(preorderTraversal((new TreeBuilder(input)).root),expectOutput)
}

console.log('144-binary-tree-preorder-traversal');
treetest([],[]);
treetest([1,2,3],[1,2,3]);
treetest([1,null,2,3],[1,2,3]);
treetest([3,2,4,null,null,1],[3,2,4,1]);
treetest([5,4,7,3,null,2,null,-1,null,9],[5,4,3,-1,7,2,9]);
treetest([30,20,40,15,27,35,45],[30,20,15,27,40,35,45]);
treetest([30,20,40,null,27,35,45],[30,20,27,40,35,45]);
treetest([50,30,90,20,40,70,100,15,27,35,45,60,78,92,107],[50,30,20,15,27,40,35,45,90,70,60,78,100,92,107]);