function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

TreeNode.prototype.setLeft = function(node){
    this.left = node;
}

TreeNode.prototype.setRight = function(node){
    this.right = node;
}

module.exports = function Tree(treeNodes) {
    var parentNode, currNode,q;
    if (treeNodes && treeNodes.length > 1) {
        this.root = new TreeNode(treeNodes[0]);
        parentNode = this.root;
        q  = [];
        for (var i = 1; i < treeNodes.length;) {
            for (var j = 0; j < 2; j++) {
                currNode = treeNodes[i];
                if (currNode !== null) {
                    var newNode = new TreeNode(currNode);
                    q.push(newNode);
                    if (i % 2) {
                        parentNode.setLeft(newNode);
                    } else {
                        parentNode.setRight(newNode);
                    }
                }
                if (j === 1) {
                    parentNode = q.shift();
                }
                if( ++i === treeNodes.length ) break;
            }
        }
    }else{
        this.root = null;
    }
}

