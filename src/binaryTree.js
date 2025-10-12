import { mergeSort } from "./mergeSort";
class Tree {
    constructor(array){
        this.root = this.buildTree(array)

    }

    buildTree(array){


    }

    sort(array){
        let seen = {}
        let array2 = []
        for (let i = 0; i <array.length; i++){
            if(array[i] in seen){
                continue;
            }
            else{
                array2.push(array[i])
            }
        }
        return mergeSort(array2)

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