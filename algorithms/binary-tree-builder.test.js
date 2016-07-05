const assert = require('assert');

var TreeBuilder = require('./../tools/binary-tree-builder');
var tree;

try{
    tree = new TreeBuilder([]);
    assert.deepEqual(tree, {
        root:null
    }, 'Empty tree. The root is a reference to NULL');
}catch(e){
    console.log(e);
}

try{
    tree = new TreeBuilder([1, 2, 3]);

    assert.ok(tree, 'tree builder can build a tree');
    assert.deepEqual(tree, {
        root: {
            val: 1,
            left: {
                val: 2,
                left: null,
                right: null,
            },
            right: {
                val: 3,
                left: null,
                right: null,
            }
        }
    }, 'build a simple tree');
}catch(e){
    console.log(e);
}

try{
    tree = new TreeBuilder([1, null, 2, 3]);
    assert.deepEqual(tree, {
        root: {
            val: 1,
            left: null,
            right: {
                val: 2,
                left: {
                    val: 3,
                    left: null,
                    right: null,
                },
                right: null,
            }
        }
    }, 'build a tree contains empty node');
}catch(e){
    console.log(e);
}

try{
    tree = new TreeBuilder([5,4,7,3,null,2,null,-1,null,9]);
    assert.deepEqual(tree, {
        root: {
            val: 5,
            left: {
                val:4,
                left:{
                    val:3,
                    left:{
                        val:-1,
                        left:null,
                        right:null,
                    },
                    right:null
                },
                right:null
            },
            right: {
                val:7,
                left:{
                    val:2,
                    left:{
                        val:9,
                        left:null,
                        right:null
                    },
                    right:null
                },
                right:null
            }
        }
    }, 'build a  deep tree contains empty node');
}catch(e){
    console.log(e);
}