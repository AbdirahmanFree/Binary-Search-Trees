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
        }
        else {
            root.rightChild = node
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

    
}







class Node {
    constructor(data, leftChild = null, rightChild = null){
        this.data = data
        this.leftChild = leftChild
        this.rightChild = rightChild
        this.parent = parent
    }
}

export{Tree}