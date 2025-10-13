import { Tree } from "./binaryTree";

const myTree = new Tree([1,2,3,4])

console.log(myTree)
myTree.prettyPrint(myTree.root)
myTree.deleteItem(2)
myTree.prettyPrint(myTree.root)
console.log(myTree)

myTree.levelOrderForEach((root)=> {
    root.data = root.data *2
})

myTree.prettyPrint(myTree.root)



