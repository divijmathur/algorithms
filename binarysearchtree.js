class Node {
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                current = current.left;
                }
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } else{
                current = current.right;
                }
            }
        }
    }
    contains(value){
        if(!this.root) return undefined;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value<current.value){
                current=current.left
            }else if(value>current.value){
                current=current.right
            }else {
                return true;
            }
        }
        return false;
    }
    BFS() {
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInorder(){
        var data = [];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var tree = new BinarySearchTree();