
var TreeBuilder = require('./../tools/binary-tree-builder');

var {postorderTraversal,postorderTraversal2} = require('./../algorithms/145-binary-tree-postorder-traversal');

var {testArr} = require('.');

function treetest(input,expectOutput){
    return testArr(postorderTraversal((new TreeBuilder(input)).root),expectOutput)
}

function treetest2(input,expectOutput){
    return testArr(postorderTraversal2((new TreeBuilder(input)).root),expectOutput)
}
console.log('145-binary-tree-postorder-traversal');
// treetest([],[]);
// treetest([1,2,3],[2,3,1]);
// treetest([1,null,2,3],[3,2,1]);
// treetest([3,2,4,null,null,1],[2,1,4,3]);
// treetest([5,4,7,3,null,2,null,-1,null,9],[-1,3,4,9,2,7,5]);
// treetest([30,20,40,15,27,35,45],[15,27,20,35,45,40,30]);
// treetest([30,20,40,null,27,35,45],[27,20,35,45,40,30]);
// treetest([50,30,90,20,40,70,100,15,27,35,45,60,78,92,107],[15,27,20,35,45,40,30,60,78,70,92,107,100,90,50]);

treetest2([],[]);
treetest2([1,2,3],[2,3,1]);
treetest2([1,null,2,3],[3,2,1]);
treetest2([3,2,4,null,null,1],[2,1,4,3]);
treetest2([5,4,7,3,null,2,null,-1,null,9],[-1,3,4,9,2,7,5]);
treetest2([30,20,40,15,27,35,45],[15,27,20,35,45,40,30]);
treetest2([30,20,40,null,27,35,45],[27,20,35,45,40,30]);
treetest2([50,30,90,20,40,70,100,15,27,35,45,60,78,92,107],[15,27,20,35,45,40,30,60,78,70,92,107,100,90,50]);