import { Tree } from "./binaryTree";

const myTree = new Tree([1,2,3,4,5,6])

console.log(myTree)
myTree.prettyPrint(myTree.root)
console.log(myTree)

myTree.prettyPrint(myTree.root)
myTree.insert(7)
myTree.prettyPrint(myTree.root)
myTree.insert(8)
myTree.prettyPrint(myTree.root)
console.log(myTree.height(4))
console.log(myTree.isBalanced())
myTree.insert(9)
myTree.prettyPrint(myTree.root)
console.log(myTree.isBalanced())
console.log(myTree.height(4))


