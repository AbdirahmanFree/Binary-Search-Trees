import { mergeSort } from "./mergeSort";
class Tree {
    constructor(array){
        this.root = this.buildTree(array)
        this.root.parent = null;

    }

    buildTree(array){
        const sortedArray = this.sort(array);
        return this.buildTreeHelp(sortedArray)
        
    }

    buildTreeHelp(array){
        if (array.length === 0) return null;
        const root = new Node()
        if(array.length <= 1){
            root.data = array[0]
            return root
        }
        const mid = Math.floor((array.length/2))
        root.data = array[mid]
        const leftSubTree = this.buildTreeHelp(array.slice(0,mid))
        const rightSubTree = this.buildTreeHelp(array.slice(mid+1,))
        if(leftSubTree != undefined){
            root.leftChild = leftSubTree
            leftSubTree.parent = root
        }
        if(rightSubTree != undefined){
            root.rightChild = rightSubTree
            rightSubTree.parent = root
        }
        return root
        
    }

    prettyPrint(node, prefix = '', isLeft = true){
        if (node === null) {
            return;
        }
        if (node.rightChild !== null) {
            this.prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.leftChild !== null) {
            this.prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    };

    sort(array){
        let seen = {}
        let array2 = []
        for (let i = 0; i <array.length; i++){
            if(array[i] in seen){
                continue;
            }
            else{
                array2.push(array[i])
                seen[array[i]] = 1
            }
        }
        return mergeSort(array2)

    }

    insert(value){
        const node = new Node()
        node.data = value
        if(this.root === null){
            return node
        }
        let root = this.root;
        let subTree;
        if (root.data < value){
            subTree = root.rightChild
        }
        else{
            subTree = root.leftChild
        }
            
        
        while(subTree != null){
            root = subTree
            if(subTree.data == value){
                return false
            }
            if (subTree.data > value){
                subTree = subTree.leftChild
            }
            else{
                subTree = subTree.rightChild
            }

        }
        if (root.data > value){
                root.leftChild = node
                node.parent = root
        }
        else {
            root.rightChild = node
            node.parent = root
        }
        return this.root


    }
    

    findMax(root){
        if(root.rightChild == null){
            return root.data
        }
        this.findMax(root.rightChild)
    }

    findMin(root){
        if(root.leftChild == null){
            return root.data
        }
        this.findMin(root.leftChild)
    }

    find(value){
        if(this.root.data == value){
            return this.root
        }

       
        let root = this.root

        while(root != null){
            if(root.data == value){
                return root
            }
            else if(root.data < value){
                root = root.rightChild
            }
            else{
                root = root.leftChild
            }
        }
        return null;
    }

    deleteItem(value){
        let root = this.find(value)
        if(root == null){
            return null
        }
        let newData = null
        if(root.rightChild == null && root.leftChild == null){
            let parent = root.parent
            if(parent.rightChild == root){
                parent.rightChild = null;
            }
            else{
                parent.leftChild = null;
            }

            
            
            return this.root
        }
        else if(root.rightChild == null){
            newData = this.findMax(root.leftChild)
            let temp = newData
            this.deleteItem(newData)
            root.data = temp;
        }
        else {
            newData = this.findMin(root.rightChild)
            let temp = newData
            this.deleteItem(newData)
            root.data = temp;
        }
    }

    levelOrderForEach(callback){
       if(typeof callback != 'function'){
        throw console.error("need function");
       }
       
        if(this.root == null){
            return
        }
        const queue = new Queue(6)
        queue.enqueue(this.root)
        while(! queue.isEmpty()){
            let root = queue.dequeue()
            callback(root)
            if(root.leftChild != null){
                queue.enqueue(root.leftChild)
            }
            if(root.rightChild != null){
                queue.enqueue(root.rightChild)
            }
        }
        

    }
    inOrderForEach(callback){
        if(typeof callback != 'function'){
            throw console.error("need function");
        }
        this.inOrderHelper(callback,this.root)

    }
    inOrderHelper(callback, root){
        if(root == null){
            return
        }
        
        this.inOrderHelper(callback,root.leftChild)
        callback(root)
        this.inOrderHelper(callback,root.rightChild)
    }

    preOrderForEach(callback){
        if(typeof callback != 'function'){
            throw console.error("need function");
        }
        this.preOrderHelper(callback,this.root)

    }

    preOrderHelper(callback, root){
        if(root == null){
            return;
        }
        callback(root)
        this.preOrderHelper(callback, root.leftChild)
        this.preOrderHelper(callback, root.rightChild)

    }

    postOrderForEach(callback){
        if(typeof callback != 'function'){
            throw console.error("need function");
        }
        this.postOrderHelper(callback,this.root)
    }

    postOrderHelper(callback, root){
        if(root == null){
            return;
        }
        this.preOrderHelper(callback, root.leftChild)
        this.preOrderHelper(callback, root.rightChild)
        callback(root)

    }

    height(value){
        let root = this.root
        let count = 0
        while(root != null){
            if(root.data == value){
                return this.heightHelper(root)
            }
            if (value > root.data){
                root = root.rightChild
                
            }
            else{
                root = root.leftChild
            }
        }
        return null

    }

    heightHelper(node){
        if( node == null){
            return 0
        }
        if(node.leftChild == null && node.rightChild == null){
            return 0
        }
        
        const leftTreeDepth = this.heightHelper(node.leftChild)
        const rightTreeDepth = this.heightHelper(node.rightChild)
        return 1 + Math.max(leftTreeDepth, rightTreeDepth)
    }

    depth(value){
        let root = this.root
        let count = 0
        while(root != null){
            if(root.data == value){
                return count
            }
            if (value > root.data){
                root = root.rightChild
                count+=1
            }
            else{
                root = root.leftChild
                count +=1
            }
        }
        return null

    }

    checkBalance(node) {
        if (node === null) return { balanced: true, height: 0 };

        const left = this.checkBalance(node.leftChild);
        const right = this.checkBalance(node.rightChild);

        const balanced =
            left.balanced &&
            right.balanced &&
            Math.abs(left.height - right.height) <= 1;

        const height = 1 + Math.max(left.height, right.height);

        return { balanced, height };
    }

    isBalanced(node = this.root) {
        return this.checkBalance(node).balanced;
    }

    rebalance(node, array= []){
        if(node == null){
            return 
        }
        this.rebalance(node.leftChild, array)
        array.push(node.data)
        this.rebalance(node.rightChild, array)
        this.root = this.buildTree(array)
        this.root.parent = null
        
    }
    

    
}







class Node {
    constructor(data, leftChild = null, rightChild = null){
        this.data = data
        this.leftChild = leftChild
        this.rightChild = rightChild
        this.parent = parent
    }
}

class Queue {
  constructor(size = 4) {
    this.size = size;
    this.array = new Array(size).fill(null);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  isEmpty() { return this.count === 0; }
  isFull() { return this.count === this.size; }

  enqueue(element) {
    if (this.isFull()) this.expand();

    this.array[this.rear] = element;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const val = this.array[this.front];
    this.array[this.front] = null;
    this.front = (this.front + 1) % this.size;
    this.count--;
    return val;
  }

  expand() {
    const newSize = this.size * 2;
    const newArray = new Array(newSize).fill(null);

    // copy elements in correct order
    for (let i = 0; i < this.count; i++) {
      newArray[i] = this.array[(this.front + i) % this.size];
    }

    this.array = newArray;
    this.size = newSize;
    this.front = 0;
    this.rear = this.count;
  }

  peek() {
    return this.isEmpty() ? null : this.array[this.front];
  }
}


export{Tree}