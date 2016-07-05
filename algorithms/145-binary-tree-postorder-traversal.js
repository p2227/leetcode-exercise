var TreeBuilder = require('./../tools/binary-tree-builder');

var postorderTraversal = function(root) {
    var number = [];
    var s = [];
    var tmp = null;
    while(root !== null || s.length > 0){
        s.push({type:'root',node:root});
        s.push({type:'right',node:root.right});
        while(root.left){            
            root = root.left;
            s.push({type:'root',node:root});
            s.push({type:'right',node:root.right});
        }
        number.push(root.val);
        tmp = s.pop();
        switch(tmp.type){
            case 'right':
                if(tmp.node && tmp.node.right){
                    root = tmp.node;
                }
                break;
            case 'root':
                number.push(tmp.node.val);
                while(tmp.type === 'root' && s.length >0){
                    tmp = s.pop()
                }
                break;
        }
    }
    return number;
};

// var tree = new TreeBuilder([]);
// console.log(postorderTraversal(tree.root));

// var tree = new TreeBuilder([1,2,3]);
// console.log(postorderTraversal(tree.root));

var tree = new TreeBuilder([1,null,2,3]);
console.log(postorderTraversal(tree.root));

var tree = new TreeBuilder([3,2,4,null,null,1]);
console.log(postorderTraversal(tree.root));
