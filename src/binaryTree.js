import { mergeSort } from "./mergeSort";
class Tree {
    constructor(array){
        this.root = this.buildTree(array)

    }

    buildTree(array){
        const sortedArray = this.sort(array);
        return this.buildTreeHelp(sortedArray)
        
    }

    buildTreeHelp(array){
        
        const root = new Node()
        if(array.length <= 1){
            root.data = array[0]
            return root
        }
        const mid = Math.floor((array.length/2))
        root.data = array[mid]
        const leftSubTree = this.buildTreeHelp(array.slice(0,mid))
        const rightSubTree = this.buildTreeHelp(array.slice(mid+1,))
        root.leftChild = leftSubTree
        root.rightChild = rightSubTree
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
            if (subTree.data > value){
                subTree = subTree.leftChild
            }
            else{
                subTree = subTree.rightChild
            }

        }
        if (root.data > value){
                root.leftChild = node
        }
        else {
            root.rightChild = node
        }
        return this.root


    }
}







class Node {
    constructor(data, leftChild = null, rightChild = null){
        this.data = data
        this.leftChild = leftChild
        this.rightChild = rightChild
    }
}

export{Tree}