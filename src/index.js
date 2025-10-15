import { Tree } from "./binaryTree";



let array = []
for (let i = 0; i< 15; i++){
    array.push(Math.floor(100*Math.random()))
}

const myTree = new Tree(array);
console.log("created an tree of random nums < 100")
myTree.prettyPrint(myTree.root)
console.log("Is the tree balanced ? : ",myTree.isBalanced(myTree.root))
console.log("Adding a couple of values > 100")
for(let i = 0; i <5; i++){
    myTree.insert(Math.floor(100* (1+ Math.random())))
}

myTree.prettyPrint(myTree.root)

console.log("Is tree balanced?: ", myTree.isBalanced(myTree.root))

console.log("rebalancing tree")
myTree.rebalance(myTree.root)
myTree.prettyPrint(myTree.root)

console.log("Is tree balanced?: ", myTree.isBalanced(myTree.root))


let levelOrder = []
let preOrder = []
let inOrder = []
let postOrder = []

myTree.levelOrderForEach((root) =>{
    levelOrder.push(root.data)
})

myTree.preOrderForEach((root) =>{
    preOrder.push(root.data)
})

myTree.inOrderForEach((root) =>{
    inOrder.push(root.data)
})

myTree.postOrderForEach((root) =>{
    postOrder.push(root.data)
})

console.log("printing elements in level order: ", levelOrder);
console.log("printing elements in preOrder: ", preOrder);
console.log("printing elements in inOrder: ", inOrder);
console.log("printing elements in postOrder: ", postOrder);
