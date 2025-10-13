import { Tree } from "./binaryTree";

const myTree = new Tree([1,2,4])

console.log(myTree)
myTree.prettyPrint(myTree.root)
myTree.insert(4)
myTree.prettyPrint(myTree.root)
myTree.insert(5)
myTree.prettyPrint(myTree.root)
console.log(myTree.find(3))

